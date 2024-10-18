echo "Building static CSS file static/output.css"
npx tailwindcss -i ./src/input.css --watch -o ./static/output.css
