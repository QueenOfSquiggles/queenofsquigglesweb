---
layout: posts
class: wide
title: "Blog Home"
permalink: /blog-home/
header:
  overlay_color: "#000"
  overlay_filter: "0.5"
  overlay_image: /assets/images/website-main-banner.png

feature_intro:
    -   excerpt: "This is the home page for the blog. You can choose how you want to find posts below"

feature_search:
    -   title: "Search"
        excerpt: "Search by key terms for whatever you are looking for"
        url: "/search/"
        btn_label: "Search Content"
        btn_class: "btn--primary"

feature_row:
    -   title: "List by year"
        excerpt: "All blog posts sorted by the year they were uploaded"
        url: "/year-archive/"
        btn_label: "Read Yearly"
        btn_class: "btn--primary"
    
    -   title: "List by tag"
        excerpt: "All blog posts sorted by the tag they were uploaded"
        url: "/tags/"
        btn_label: "Read Tags"
        btn_class: "btn--primary"

    -   title: "List by category"
        excerpt: "All blog posts sorted by categories"
        url: "/categories/"
        btn_label: "Read Categories"
        btn_class: "btn--primary"
---

{%include feature_row id="feature_intro" type="center"%}

{%include feature_row id="feature_search" type="center"%}

{%include feature_row %}


# View All Posts