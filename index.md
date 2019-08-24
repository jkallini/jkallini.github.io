---
layout: default
make-smaller-titles: true
---

<div class="container-fluid index">
    <div class="row">
        <div class="col-md-12 main content-panel">
            <div class="gravatar">
                <img src="{{ site.title_image }}" class="img-circle about-image" height="150" width="150" alt="{{ site.title }}" />
            </div>
            <h1 class="header author-header" itemprop="headline">{{ site.title }}</h1>
            <div class="author-text">
                {{ site.title_description }}
            </div>
            {% include social_links.html %}
            <br/>
            <center>
            <a href="#about">About Me</a> |
            <a href="#education">Education</a> |
            <a href="#experience">Experience</a> |
            <a href="#projects">Projects</a> |
            <a href="#recent_posts">Recent Posts</a>
            </center>
          </div>
        <div class="col-md-12 main content-panel">
            <a id="about"></a>
            <div class="articles">
                <h2>About Me</h2>
            </div>
            <p markdown="1">
            {% include about.md %}
            </p>
        </div>
        <div class="col-md-12 main content-panel">
            <a id="education"></a>
            {% include education.html %}
        </div>
        <div class="col-md-12 main content-panel">
            <a id="experience"></a>
            {% include experience.html %}
        </div>
        <div class="col-md-12 main content-panel">
            <a id="projects"></a>
            {% include projects.html %}
        </div>
        <div class="col-md-12 main content-panel">
            <a id="recent_posts"></a>
            <div class="articles">
            <h2>Recent Posts</h2>
            <ul>
                {% for post in site.posts limit: site.post_limit %}
                    <li>
                        <a href="{{ post.url | prepend: site.baseurl }}">{{ post.title }}</a>
                        <small class="hidden-xs">{{ post.date | date: "%B %-d, %Y" }}</small>
                    </li>
                {% endfor %}
                  <li>
                      <small><i><a href="{{ site.baseurl }}/posts-by-categories/">more...</a></i></small>
                  </li>
              </ul>
            </div>
        </div>
    </div>
</div>
