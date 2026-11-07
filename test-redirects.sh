#!/bin/bash

echo "Testing redirects and route resolution..."
echo ""

test_redirect() {
    local url="$1"
    local expected_final="$2"
    
    echo -n "Testing $url ... "
    
    # Follow redirects and check final status
    final_status=$(curl -sL -w "%{http_code}" -o /dev/null "http://localhost:4321$url")
    
    if [ "$final_status" = "200" ]; then
        echo "✅ OK (200)"
        return 0
    else
        echo "❌ FAIL ($final_status)"
        return 1
    fi
}

# Test .html redirects
test_redirect "/writing/tragic-design-is.html" "/writing/tragic-design-is"
test_redirect "/writing/picking-up-the-pieces.html" "/writing/picking-up-the-pieces"
test_redirect "/writing/16-open-tabs.html" "/writing/16-open-tabs"
test_redirect "/writing/2007.html" "/writing/2007"
test_redirect "/writing/books.html" "/writing/books"

# Test missing slug redirects
test_redirect "/writing/lil-vector-search" "/writing/2023/little-vector-search"
test_redirect "/writing/2025/39-lessons" "/writing/39-lessons"

# Test year-based redirects
test_redirect "/writing/2022/links-part-one.html" "/writing/2022/links-part-one"
test_redirect "/writing/2023/links-april-2023.html" "/writing/2023/links-april-2023"

echo ""
echo "Redirect tests complete"
