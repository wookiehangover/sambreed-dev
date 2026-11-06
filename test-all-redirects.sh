#!/bin/bash

echo "Testing all redirects with full chains..."
echo ""

FAILED=0
PASSED=0

test_redirect_chain() {
    local url="$1"
    local desc="$2"
    
    echo -n "Testing $desc ... "
    
    # Get response with redirect following
    response=$(curl -sL -w "\n%{http_code}\n%{url_effective}" "http://localhost:4321$url" 2>&1)
    final_status=$(echo "$response" | tail -2 | head -1)
    final_url=$(echo "$response" | tail -1)
    body=$(echo "$response" | head -n -2)
    
    if [ "$final_status" = "200" ]; then
        # Check if we got actual HTML content
        if echo "$body" | grep -q "<title>"; then
            echo "✅ 200 OK → $final_url"
            ((PASSED++))
            return 0
        else
            echo "❌ 200 but no HTML content"
            ((FAILED++))
            return 1
        fi
    else
        echo "❌ $final_status"
        ((FAILED++))
        return 1
    fi
}

echo "=== Legacy .html redirects (16 total) ==="
test_redirect_chain "/writing/tragic-design-is.html" "tragic-design-is.html"
test_redirect_chain "/writing/picking-up-the-pieces.html" "picking-up-the-pieces.html"
test_redirect_chain "/writing/16-open-tabs.html" "16-open-tabs.html"
test_redirect_chain "/writing/2016-reading-list.html" "2016-reading-list.html"
test_redirect_chain "/writing/2017-reading-list.html" "2017-reading-list.html"
test_redirect_chain "/writing/lessons-from-the-jerk.html" "lessons-from-the-jerk.html"
test_redirect_chain "/writing/making-things-for-fun.html" "making-things-for-fun.html"
test_redirect_chain "/writing/protect-your-history.html" "protect-your-history.html"
test_redirect_chain "/writing/static-sites-with-next-js.html" "static-sites-with-next-js.html"
test_redirect_chain "/writing/why-I-read-what-I-read-in-2016.html" "what-I-read (filename mismatch)"
test_redirect_chain "/writing/2007.html" "2007.html"
test_redirect_chain "/writing/books.html" "books.html"
test_redirect_chain "/writing/twitter.html" "twitter.html"

echo ""
echo "=== Year-based .html redirects (3 existing) ==="
test_redirect_chain "/writing/2022/links-part-one.html" "2022/links-part-one.html"
test_redirect_chain "/writing/2022/links-august-2022.html" "2022/links-august-2022.html"
test_redirect_chain "/writing/2023/links-april-2023.html" "2023/links-april-2023.html"

echo ""
echo "=== Slug override redirects ==="
test_redirect_chain "/writing/lil-vector-search" "lil-vector-search"
test_redirect_chain "/writing/2025/39-lessons" "2025/39-lessons"

echo ""
echo "=== Summary ==="
echo "Passed: $PASSED"
echo "Failed: $FAILED"
echo ""

exit $FAILED
