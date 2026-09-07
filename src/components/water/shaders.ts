export const vertexShader = `
attribute vec2 position;
void main() {
  gl_Position = vec4(position, 0.0, 1.0);
}
`;

export const fragmentShader = `
precision highp float;
uniform vec2 resolution;
uniform float time;

float hash(vec2 p) {
  vec3 p3 = fract(vec3(p.xyx) * 0.1031);
  p3 += dot(p3, p3.yzx + 33.33);
  return fract((p3.x + p3.y) * p3.z);
}

float noise(vec2 p) {
  vec2 i = floor(p);
  vec2 f = fract(p);
  f = f * f * (3.0 - 2.0 * f);
  return mix(mix(hash(i), hash(i + vec2(1, 0)), f.x),
             mix(hash(i + vec2(0, 1)), hash(i + vec2(1, 1)), f.x), f.y);
}

// A stationary camera above a plane gives the ripples their natural
// compression toward the horizon. Small octaves fade before they alias.
float waves(vec2 p, float footprint) {
  float sum = 0.0;
  float amplitude = 0.55;
  float frequency = 1.0;
  mat2 turn = mat2(0.96, -0.28, 0.28, 0.96);
  for (int i = 0; i < 7; i++) {
    float visible = 1.0 - smoothstep(0.3, 1.5, footprint * frequency);
    vec2 drift = vec2(time * 0.15, -time * 0.09) * (mod(float(i), 2.0) * 2.0 - 1.0);
    float n = noise(p * vec2(0.8, 2.8) + drift);
    sum += (1.0 - abs(2.0 * n - 1.0)) * amplitude * visible;
    p = turn * p * 1.93 + vec2(9.1, 3.7);
    frequency *= 1.93;
    amplitude *= 0.52;
  }
  return sum;
}

void main() {
  vec2 uv = gl_FragCoord.xy / resolution;
  float aspect = resolution.x / resolution.y;
  float horizon = 0.442;
  float skyHeight = clamp((uv.y - horizon) / (1.0 - horizon), 0.0, 1.0);
  vec3 sky = mix(vec3(0.57, 0.57, 0.52), vec3(0.30, 0.32, 0.33), pow(skyHeight, 0.68));
  float glow = exp(-pow((uv.x - 0.77) * 1.65, 2.0));
  sky += vec3(0.07, 0.061, 0.038) * glow * pow(1.0 - skyHeight, 3.0);
  sky += (noise(vec2(uv.x * 3.0, uv.y * 4.0)) - 0.5) * 0.008;
  vec3 color = sky;

  if (uv.y < horizon) {
    float depth = horizon - uv.y;
    float distance = 1.65 / (depth + 0.003);
    vec2 p = vec2((uv.x - 0.5) * aspect * distance, distance) * 2.8;
    float footprint = distance * distance * 2.8 / (1.65 * resolution.y);
    float e = max(0.016, footprint * 0.4);
    float h = waves(p, footprint);
    vec2 slope = vec2(waves(p + vec2(e, 0), footprint) - h,
                      waves(p + vec2(0, e), footprint) - h) / e;
    float reflection = exp(-pow((uv.x - 0.77) / (0.23 + depth * 0.4), 2.0));
    // Subpixel capillary waves resolve into a soft reflection at a distance.
    float detail = noise(p * vec2(7.0, 22.0) + vec2(time * 0.7, -time * 0.4));
    float sparkle = pow(max(0.0, 1.0 - abs(slope.y - 0.18) * 1.45), 2.5);
    sparkle *= smoothstep(0.25, 0.72, detail);
    sparkle = mix(sparkle, 0.33, smoothstep(0.4, 12.0, footprint));
    float distant = exp(-depth * 110.0);

    color = vec3(0.055, 0.072, 0.074);
    color += vec3(0.055, 0.057, 0.052) * h;
    color += vec3(0.11, 0.115, 0.10) * pow(1.0 - depth / horizon, 3.0);
    color += vec3(0.96, 0.93, 0.79) * reflection * sparkle * 1.85;
    color += vec3(0.17, 0.17, 0.14) * reflection * (0.3 + h * 0.45);
    color = mix(color, vec3(0.40, 0.41, 0.37) + vec3(0.27, 0.26, 0.20) * reflection, distant);
    color = mix(color, sky, smoothstep(horizon - 0.002, horizon, uv.y));
  }

  // Fixed, very fine grain keeps the restrained photographic texture.
  color += (hash(gl_FragCoord.xy) - 0.5) / 255.0;
  gl_FragColor = vec4(color, 1.0);
}
`;
