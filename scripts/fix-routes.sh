#!/bin/bash -e

# Name of the file
FILE_NAME="dist/_routes.json"

# Backup the original file before making changes
cp "$FILE_NAME" "${FILE_NAME}.bak"

jq '(.exclude | map(select(test("^/img/.*$|^/languages/.*$") | not))) as $newExcludes | .exclude = $newExcludes' "$FILE_NAME" > "$FILE_NAME.tmp" && mv "$FILE_NAME.tmp" "$FILE_NAME"

jq '(.exclude += ["/img/*", "/languages/*"])' "$FILE_NAME" > "$FILE_NAME.tmp" && mv "$FILE_NAME.tmp" "$FILE_NAME"
  
# If there is no newline at the end of the file, add one
tail -c1 "$FILE_NAME" | read -r _ || echo '' >> "$FILE_NAME"

rm "${FILE_NAME}.bak"

# Print out a message to indicate completion
echo "Routes updated in _routes.json."