---
layout: default
---

## Portfolio

This portfolio showcases some of my favorite projects, each of which has given me the chance to dive into new technologies and concepts. From developing lightweight frameworks to experimenting with concurrency and programming languages, these projects represent a journey of learning and exploration. They’ve allowed me to solve interesting problems and deepen my understanding of how different systems work.

---

### mūsēum 🏛

mūsēum (/muːˈseː.um/) is a project from the University of Vienna to provide researchers with a simple way to archive and access old web applications. Often, in the course of a research project, web applications are created to provide a user interface for data collection or analysis or simply to share ones research. These applications are mostly developed quickly and with little regard for long-term maintenance. As a result, they are often difficult to access and maintain. mūsēum provides a simple way to archive and access these applications.

[GitHub](https://github.com/Azer0s/museum)

### sanic 🚀

Sanic is a high-performance, lightweight HTTP framework I built in C using libuv, designed to support Clang blocks and the Boehm garbage collector. I created Sanic to deepen my understanding of HTTP server internals and explore how concurrency can be handled in libuv. Initially, I approached the project with a single-threaded model, but I later implemented concurrency using io_uring for better performance. Ultimately, I transitioned to libuv to leverage its robust, non-blocking I/O capabilities and event-driven architecture.

[GitHub](https://github.com/Azer0s/sanic)

<details>
<summary>Code Example</summary>
{% highlight c %}
#include <gc>
#include <sanic.h>

int main() {
  sanic_init();
  sanic_log_level(SANIC_LOG_LEVEL_DEBUG);

  sanic_http_on_get("/", ^void(struct sanic_http_request *req) {
    res->response_body = "<h1>Hello, World!</h1>";
  });

  return sanic_http_serve(8080);
}

{% endhighlight %}
</details>

### quacktors 🦆

quacktors or "quick actors" is a Go framework that brings Erlang/Elixir style concurrency to Go! It allows for message passing, actor monitoring and can even deal with remote actors/systems. Furthermore, it comes with plenty of useful standard modules for building actor model systems (like Supervisors, Relays, etc.).

[GitHub](https://github.com/Azer0s/quacktors)

<details>
<summary>Code Example</summary>
{% highlight go %}
package main

import (
    "fmt"
    "github.com/Azer0s/quacktors"
)

func main() {
    foo := quacktors.NewSystem("foo")

    pid := quacktors.Spawn(func(ctx *quacktors.Context, message quacktors.Message) {
        switch m := message.(type) {
            case quacktors.GenericMessage:
                fmt.Println(m.Value)
            }
    })

    foo.HandleRemote("printer", pid)

    quacktors.Run()
}
{% endhighlight %}
</details>

### pogmalloc 🐸

pogmalloc is a simple, fast, and efficient memory allocator I built in C. It features a real heap allocator (vie `sbrk(2)`), a built in garbage collector and debug and trace logging. I created pogmalloc to deepen my understanding of memory allocation and garbage collection in C. It is not meant to be used in production, but rather as a learning tool.

[GitHub](https://github.com/Azer0s/pogmalloc)

### Hummus 🌯

Humus is a LISP-ish programming language I built in Go. It features a simple, easy-to-use syntax and a powerful macro system. I created Hummus because I wanted a tool to experiment with language design and implementation. I actually did a lot of data processing with it. Actually working with a language I created was a lot of fun!

[GitHub](https://github.com/Azer0s/Hummus)

<details>
<summary>Code Example</summary>

{% highlight clojure %}
(use :<base>)
(use :<str>)

(def pilots (list
  ({}
    (:id 2)
    (:name "Wedge Antilles")
    (:faction "Rebels")
  )
  ({}
    (:id 8)
    (:name "Ciena Ree")
    (:faction "Empire")
  )
  ({}
    (:id 40)
    (:name "Iden Versio")
    (:faction "Empire")
  )
  ({}
    (:id 66)
    (:name "Thane Kyrell")
    (:faction "Rebels")
  )
))

(each
  (map pilots (fn x
    (str/concat (` (:name x)) " => " (` (:faction x)))
  ))
(fn x
  (out x)
))

(each
  (filter pilots (fn x
    (= (:faction x) "Empire")
  ))
(fn x
  (out (:name x))
))

(out (reduce pilots (fn x acc
  (if (= (:faction x) "Empire")
    (+ acc 1)
    acc
  )
) 0))
{% endhighlight %}

</details>

### reactive-interaction-gateway 🔮

The Reactive Interaction Gateway (RIG) is an open-source project written in Elixir that I contributed to during my time at Accenture. I worked on building an abstraction layer (`VConnection`) to simplify the management of WebSocket, Server-Sent Events (SSE), and long-polling connections. This layer made it possible to seamlessly switch between connection types, handle reconnections, and fetch missed messages using the last-event-id header. The project focused on improving the flexibility and robustness of real-time messaging systems, offering a smoother developer experience when working with event-driven architectures.

[GitHub](https://github.com/Accenture/reactive-interaction-gateway)

---

<!--## Blog

{% for post in site.posts %}

<div class="post">

    <a href="{{ post.url | relative_url }}">
        <h3>{{ post.title }}</h3>
    </a>

    <p>{{ post.summary | markdownify }}</p>
</div>
{% endfor %}

--->

## About

I'm a software developer with an interest in system architecture 🏗️, concurrency ⚙️, and language design 💻. I enjoy exploring how things work behind the scenes and applying that knowledge to build efficient and practical solutions. ✨

<br>

Feel free to take a look at my repositories or reach out - I'm always happy to discuss interesting ideas or collaborate on projects! 🌱

<br>

{% include socials.html %}