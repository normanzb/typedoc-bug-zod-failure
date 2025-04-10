# Bug Report for Typedoc Plugin Zod

typedoc-plugin-zod is not working with typedoc `~0.28.0`.

## Steps to Reproduce

1. Clone this repository
2. Run `npm install`
3. Run `npm run build`
4. Open `dist/index.html` in your browser

## Expected Behavior

Should see properties of zod types for `CommentData` in `test.ts` rendered in the output.

## Actual Behavior

No detailed properties for `CommentData`
