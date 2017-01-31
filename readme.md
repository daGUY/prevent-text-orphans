# Prevent Text Orphans
* By James Scariati
* October 2015

## Description
Dynamically prevent text orphans by enforcing a minimum number of words in the last line of any text block.

**[View Demo](http://scariati.kissr.com/github/pto/)**

## Dependencies
* [jQuery](http://jquery.com)

## Use
Include jQuery and the `jquery.preventTextOrphans.js` plugin in your HTML:

```html
<head>
	<script src="lib/jquery.min.js"></script>
	<script src="lib/jquery.preventTextOrphans.js"></script>
</head>
```

Add the following class to your CSS:

```css
.no-wrap {
	white-space: nowrap;
}
```

Then call `preventTextOrphans()` on the elements where you wish to apply it:

```javascript
$("h1, h2, h3").preventTextOrphans();
```

## Options

The following options are available:

```javascript
$("h1, h2, h3").preventTextOrphans({
	minimum: 2,
	wrapperClass: "no-wrap",
	wrapperElement: "span"
});
```

* `minimum`: The minimum number of words that must appear in the last line of the text block. Defaults to `2`
* `wrapperClass`: The class name to use on the HTML element that wraps the `minimum` number of words
* `wrapperElement`: The HTML element that wraps the `minimum` number of words

## Notes
HTML tags in the text block are preserved, but are treated as one item, regardless of how many words they contain. For example, given the following HTML:

```html
Let Us Know What <strong>You Think</strong>
```

The entire `<strong>` tag and its contents will be treated as one "word," so applying `preventTextOrphans()` will result in four words in the last line of text rather than two:

```html
Let Us Know <span class="no-wrap">What <strong>You Think</strong></span>
```

To be addressed in a future update...