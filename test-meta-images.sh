#!/bin/bash

echo "Testing og:image and twitter:image meta tags..."
echo ""

test_meta_images() {
    local url="$1"
    local desc="$2"
    
    echo "=== Testing $desc ==="
    echo "URL: $url"
    
    # Get page HTML
    html=$(curl -sL "http://localhost:4321$url")
    
    # Extract og:image
    og_image=$(echo "$html" | grep -oP 'property="og:image" content="\K[^"]+' || echo "NOT FOUND")
    echo "og:image: $og_image"
    
    # Extract twitter:image
    twitter_image=$(echo "$html" | grep -oP 'property="twitter:image" content="\K[^"]+' || echo "NOT FOUND")
    echo "twitter:image: $twitter_image"
    
    # Validate URLs are absolute
    if [[ "$og_image" == http* ]]; then
        echo "✅ og:image is absolute URL"
        
        # Try to fetch the image
        img_status=$(curl -sI "$og_image" -w "%{http_code}" -o /dev/null)
        if [ "$img_status" = "200" ]; then
            echo "✅ og:image is accessible ($img_status)"
        else
            echo "⚠️  og:image returned $img_status"
        fi
    else
        echo "❌ og:image is not absolute: $og_image"
    fi
    
    if [[ "$twitter_image" == http* ]]; then
        echo "✅ twitter:image is absolute URL"
    else
        echo "❌ twitter:image is not absolute: $twitter_image"
    fi
    
    echo ""
}

# Test with default image (no cover)
test_meta_images "/writing/tragic-design-is" "Default image (no cover)"

# Test with custom cover image
test_meta_images "/writing/2025/39-lessons" "Custom cover image"

# Test another with cover
test_meta_images "/writing/2023/lil-vector-search" "Custom cover (little-vector-search)"

echo "Meta image tests complete"
