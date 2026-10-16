export const MAX_RIPPLES = 16;

export const vertexShader = /* glsl */ `
precision highp float;
precision highp sampler2D;

in float line;
in float along;
in float side;
in float channel;

uniform mat4 projectionMatrix;
uniform mat4 modelViewMatrix;
uniform sampler2D positions;
uniform sampler2D velocities;
uniform vec2 grid;
uniform float lines;
uniform float segments;
uniform vec2 resolution;
uniform float lineWidth;
uniform float chroma;
uniform float time;
uniform float aspect;
uniform float breeze;
uniform vec4 ripples[${MAX_RIPPLES}];

out vec3 vColor;
out float vSide;
out float vHalf;

vec3 texel(sampler2D map, ivec2 p) {
  return texelFetch(map, clamp(p, ivec2(0), ivec2(grid) - 1), 0).xyz;
}

vec4 catmullRom(float t) {
  return vec4(
    t * (-0.5 + t * (1.0 - 0.5 * t)),
    1.0 + t * t * (-2.5 + 1.5 * t),
    t * (0.5 + t * (2.0 - 1.5 * t)),
    t * t * (-0.5 + 0.5 * t)
  );
}

vec3 surface(vec2 uv) {
  vec2 g = uv * (grid - 1.0);
  vec2 i = floor(g);
  vec2 f = g - i;
  vec4 wx = catmullRom(f.x);
  vec4 wy = catmullRom(f.y);
  ivec2 base = ivec2(i) - 1;
  vec3 sum = vec3(0.0);
  for (int y = 0; y < 4; y++) {
    vec3 row = texel(positions, base + ivec2(0, y)) * wx.x
      + texel(positions, base + ivec2(1, y)) * wx.y
      + texel(positions, base + ivec2(2, y)) * wx.z
      + texel(positions, base + ivec2(3, y)) * wx.w;
    sum += row * wy[y];
  }
  return sum;
}

vec3 velocity(vec2 uv) {
  vec2 g = uv * (grid - 1.0);
  ivec2 i = ivec2(floor(g));
  vec2 f = fract(g);
  return mix(
    mix(texel(velocities, i), texel(velocities, i + ivec2(1, 0)), f.x),
    mix(texel(velocities, i + ivec2(0, 1)), texel(velocities, i + ivec2(1, 1)), f.x),
    f.y
  );
}

float ripple(vec2 uv) {
  float sum = 0.0;
  for (int n = 0; n < ${MAX_RIPPLES}; n++) {
    vec4 r = ripples[n];
    float age = time - r.z;
    if (r.w <= 0.0 || age < 0.0) continue;
    float d = length((uv - r.xy) * vec2(1.0, aspect));
    float x = d - age * 0.42;
    float envelope = exp(-x * x * 90.0) * exp(-age * 2.0) / (1.0 + d * 6.0);
    sum += r.w * envelope * sin(x * 70.0);
  }
  return sum;
}

// Slow folds rolling down the sheet, too fine for the cloth grid to carry.
float folds(vec2 uv) {
  float hang = uv.y * uv.y;
  return breeze * hang * (
    sin(uv.y * 17.0 - time * 1.3 + uv.x * 2.2) * 0.055 +
    sin(uv.y * 9.0 - time * 0.8 - uv.x * 3.4) * 0.07
  );
}

vec2 screen(vec4 clip) {
  return clip.xy / clip.w * 0.5 * resolution;
}

void main() {
  vec2 uv = vec2(line / (lines - 1.0), along);
  float dv = 1.0 / segments;
  float back = along > 1.0 - dv * 0.5 ? -1.0 : 1.0;
  vec2 uvNext = uv + vec2(0.0, dv * back);

  float wave = ripple(uv);
  // Ripples lift the cloth only away from the pinned edge.
  float lift = smoothstep(0.0, 0.12, along);
  vec3 p = surface(uv) + vec3(0.0, 0.0, wave * 0.035 * lift + folds(uv));
  vec3 q = surface(uvNext) + vec3(0.0, 0.0, ripple(uvNext) * 0.035 * lift + folds(uvNext));
  vec3 v = velocity(uv);

  mat4 mvp = projectionMatrix * modelViewMatrix;
  vec4 clip = mvp * vec4(p, 1.0);
  vec2 s = screen(clip);
  vec2 tangent = (screen(mvp * vec4(q, 1.0)) - s) * back;
  tangent = length(tangent) > 1e-4 ? normalize(tangent) : vec2(0.0, 1.0);
  vec2 normal = vec2(-tangent.y, tangent.x);
  vec2 motion = screen(mvp * vec4(p + v * 0.035, 1.0)) - s;

  vec2 dir = normalize(vec2(1.0, -0.22));
  vec2 split = dir * chroma * (1.0 + abs(wave) * 3.5 + abs(p.z) * 3.0) + motion * 0.9;
  float limit = chroma * 9.0;
  if (length(split) > limit) split = normalize(split) * limit;

  float halfWidth = lineWidth * 0.5;
  vec2 offset = normal * side * (halfWidth + 1.0) + split * channel;
  clip.xy += offset / (0.5 * resolution) * clip.w;
  gl_Position = clip;

  vColor = channel < -0.5 ? vec3(1.0, 0.0, 0.0) : channel > 0.5 ? vec3(0.0, 0.0, 1.0) : vec3(0.0, 1.0, 0.0);
  vSide = side * (halfWidth + 1.0);
  vHalf = halfWidth;
}
`;

export const fragmentShader = /* glsl */ `
precision highp float;

in vec3 vColor;
in float vSide;
in float vHalf;

out vec4 color;

void main() {
  float coverage = clamp(vHalf + 0.5 - abs(vSide), 0.0, 1.0);
  color = vec4(vColor * coverage, 1.0);
}
`;
