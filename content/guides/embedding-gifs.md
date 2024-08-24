---
title: "Embedding GIFs"
summary: "A guide on how I embed GIFs on my blog."
date: 2024-08-24

taxonomies:
  tags:
    - tech discussion
    - guide
    - tool
---

## Hey look! A new post

Yeah I'm moving the discussion about how I embed tenor GIFs out of the [FSMs versus Behaviour Trees](@/guides/fsm-vs-bt/index.md) page to make that page more readable and make a coherent page for different approaches to embedding gifs easily. As of writing, I'm adding a third recipe here so hopefully this is appreciated.

## GIF Embedding

### In Jekyll

`_includes/tenor.html`

```html

<div style="margin: auto; width: {{ include.width }}; border: 3px solid black; padding: 10px;">
    <div 
  class="tenor-gif-embed" 
  data_postid="{{ include.data_postid }}" 
  data-share-method="host" 
  data_aspect_ratio="{{ include.data_aspect_ratio }}" 
  data-width="100%"
 >
        <a href="{{ include.url }}"/>
    </div>
    <script type="text/javascript" async src="https://tenor.com/embed.js"></script>
    {% if include.caption %}}

 <i> {{ include.caption }} </i>

 {% endif %}
</div>
```

Then in any article (or page) I can just use:

```markdown
{% include tenor.html data_postid="THE-POST-ID" data_aspect_ratio="ASPECT" width="DESIRED-WIDTH" url='EMBED-URL' caption="OPTIONAL-CAPTION" %}
```

the three values are stripped from the embed code for the gif: `data_postid`, `data_aspect_ratio`, and `url`. Those ensure the image is actually loaded. Then `width` controls how wide on the screen they are. I prefer `50%` for my gifs in this article. The the `caption` is an optional tag that will add some text below the gif.

### In Hugo

For Hugo you need to use shortcodes. Which are not terribly different from Jekyll's includes.

`/layouts/shortcodes/tenor.html`

```html
<div style="margin: auto; width: {{ .Get "width" }}; border: 3px solid black; padding: 10px;">
 <div
  class="tenor-gif-embed"
  data_postid="{{ .Get "data_postid" }}"
  data-share-method="host"
  data_aspect_ratio="{{ .Get "data_aspect_ratio" }}"
  data-width="100%"
 >
  <a href="{{ .Get "url" }}"></a>
 </div>
 <script type="text/javascript" async src="https://tenor.com/embed.js"/></script>
 <noscript>
{{ if .Get "fallback" }}
  <img src="{{ .Get "fallback" }}"/>
{{ else }}
  <p>
   <i>
    <b>No fallback provided!</b>
   </i>
  </p>
  <br/>
{{ end }}
  <p>
   <b>GIF embed failed. </b>
   <a href="{{ .Get "url" }}">Click to view source.</a>
  </p>
 </noscript>
{{ if .Get "caption" }}
 <br/>
 <b>Caption: </b>
 <i> {{ .Get "caption" }} </i>
{{ end }}
</div>
<br/>
```

And loading the shortcode can be done in different ways (line breaks are ignored with Hugo's shortcodes). Note that a space between `{{` and `<` is only present because it would otherwise be rendered as normal in this page.

Easier to read:

```markdown
{{ < tenor 
 data_postid="8246706" 
 data_aspect_ratio="1.43103" 
 width="50%" 
 url='https://tenor.com/view/anime-goku-dbz-dragon-ball-super-saiyan-gif-8246706' 
 caption="Goku from Dragon Ball Z power up to 'super saiyin'" 
 fallback="https://media.tenor.com/XfrqyR_-jzIAAAAC/anime-goku.gif"
>}}
```

Shorter:

```markdown
{{ < tenor data_postid="8246706" data_aspect_ratio="1.43103" width="50%" url='https://tenor.com/view/anime-goku-dbz-dragon-ball-super-saiyan-gif-8246706' caption="Goku from Dragon Ball Z power up to 'super saiyin'" fallback="https://media.tenor.com/XfrqyR_-jzIAAAAC/anime-goku.gif" >}}
```

### In Zola

Yet another update to this. Zola has a templating system much more similar to Jekyll than hugo. One step forwards; two steps back :sweat_smile:

`/templates/shortcodes/tenor.html`

```html
<div style="display: flex; flex-direction: column; justify-items: center; align-items: center; ">
    <div class="{% if background %} bg-{{background}} {% else %} bg-secondary {% endif %} rounded"
        style="width: 50%; padding: .5rem;">
        <div class="tenor-gif-embed" data-postid="{{ data_postid }}" data-share-method="host"
            data-aspect-ratio="{{ data_aspect_ratio }}" data-width="100%">
        </div>
    </div>
    <div>

        <script type="text/javascript" async src="https://tenor.com/embed.js">
        </script>
        <noscript>
            <img src="{{ fallback }}" />
            <p>
                <a href="{{ url }}">
                    <b>GIF embed fallback in use. </b>
                </a>
            </p>
        </noscript>
    </div>
    <div class="{% if background %} btn-{{background}} {% else %} btn-secondary {% endif %} rounded-bottom"
        style="padding: .5rem; max-width: 45%;">
        <b>Caption: </b>
        <i>{{ caption }}</i>
    </div>
</div>
<br />
```
