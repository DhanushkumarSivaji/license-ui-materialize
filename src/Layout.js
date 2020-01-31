import React, { useEffect, useState } from "react";
import "materialize-css/dist/css/materialize.min.css";
import M from "materialize-css/dist/js/materialize.min.js";
import LineChart from './charts/smallcards/LineChart';
import BarChart from './charts/smallcards/BarChart';
import AreaChart from './charts/smallcards/AreaChart';
import TreeChart from './charts/smallcards/TreeChart';
import FirstCard from './charts/bigcards/FirstCard';
import SecondCard from './charts/bigcards/SecondCard';
import ThirdCard from './charts/bigcards/ThirdCard';
import FourthCard from './charts/bigcards/FourthCard';
import PercenrageCard from './charts/percentageCard';
import UsersList from './users/usersList'
function Navbar() {
  useEffect(() => {
    // Init Materialize JS
    M.AutoInit();
    document.addEventListener("DOMContentLoaded", function() {
      var elems = document.querySelectorAll(".sidenav");
      var instances = M.Sidenav.init(elems, {});
    });
  });
  return (
    <div>
      <header>
        <nav>
          <div class="nav-wrapper">
            <div class="row">
              <div class="col s12">
                <a
                  href="#"
                  data-target="sidenav"
                  class="left sidenav-trigger hide-on-medium-and-up"
                >
                  <i class="material-icons">menu</i>
                </a>

                <a
                  href="https://codepen.io/collection/nbBqgY"
                  target="_blank"
                  class="brand-logo"
                >
                  Licensing Admin Panel
                </a>
              </div>
            </div>
          </div>
        </nav>
      </header>

      <ul id="sidenav" class="sidenav sidenav-fixed">
        <li>
          <a class="subheader">Always out except on mobile</a>
        </li>
        <li>
          <a href="https://github.com/dogfalo/materialize/" target="_blank">
            Github
          </a>
        </li>
        <li>
          <a href="https://twitter.com/MaterializeCSS" target="_blank">
            Twitter
          </a>
        </li>
        <li>
          <a
            href="http://next.materializecss.com/getting-started.html"
            target="_blank"
          >
            Docs
          </a>
        </li>
      </ul>

      <main>
      <section>
          <div className="row">
            <div className="col s12 m3 l3">
              <LineChart />
            </div>
            <div className="col s12 m3 l3">
              <BarChart />
            </div>
            <div className="col s12 m3 l3">
              <AreaChart />
            </div>
            <div className="col s12 m3 l3">
              <TreeChart />
            </div>
          </div>
        </section>
        <section class="section section-stats center">
          <div class="row">
            <div class="col s12 m6 l3">
            <FirstCard/>
            </div>
            <div class="col s12 m6 l3">
            <SecondCard/>
            </div>
            <div class="col s12 m6 l3">
            <ThirdCard/>
            </div>
            <div class="col s12 m6 l3">
             <FourthCard/>
            </div>
          </div>
        </section>

        <section class="section section-visitors blue lighten-4">
          <div class="row">
            <div class="col s12 m6 l8">
            <UsersList/>
            </div>
            <div class="col s12 m6 l4">
              <ul class="collection with-header latest-comments">
                <li class="collection-header">
                  <h5>Latest Comments</h5>
                </li>
                <li class="collection-item avatar">
                  <img src="img/person1.jpg" alt="" class="circle" />
                  <span class="title">John Doe</span>
                  <p class="truncate">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Nesciunt minima dolor error laboriosam autem ad beatae
                    explicabo pariatur maxime fuga sed quod quo voluptas,
                    adipisci illum aspernatur est, fugit tempore.
                  </p>
                  <a href="" class="approve green-text">
                    Approve
                  </a>{" "}
                  |
                  <a href="" class="deny red-text">
                    Deny
                  </a>
                </li>
                <li class="collection-item avatar">
                  <img src="img/person2.jpg" alt="" class="circle" />
                  <span class="title">Steve Smith</span>
                  <p class="truncate">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Nesciunt minima dolor error laboriosam autem ad beatae
                    explicabo pariatur maxime fuga sed quod quo voluptas,
                    adipisci illum aspernatur est, fugit tempore.
                  </p>
                  <a href="" class="approve green-text">
                    Approve
                  </a>{" "}
                  |
                  <a href="" class="deny red-text">
                    Deny
                  </a>
                </li>
                <li class="collection-item avatar">
                  <img src="img/person3.jpg" alt="" class="circle" />
                  <span class="title">Ellen Williams</span>
                  <p class="truncate">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Nesciunt minima dolor error laboriosam autem ad beatae
                    explicabo pariatur maxime fuga sed quod quo voluptas,
                    adipisci illum aspernatur est, fugit tempore.
                  </p>
                  <a href="" class="approve green-text">
                    Approve
                  </a>{" "}
                  |
                  <a href="" class="deny red-text">
                    Deny
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </section>
        <section>
          <div className="row">
            <div className="col s12 m3 l3">
              <PercenrageCard />
            </div>
            <div className="col s12 m3 l3">
              <PercenrageCard />
            </div>
            <div className="col s12 m3 l3">
              <PercenrageCard />
            </div>
            <div className="col s12 m3 l3">
              <PercenrageCard />
            </div>
          </div>
        </section>
        <section class="section section-recent">
          <div class="row">
            <div class="col s12 l8 m6">
              <div class="card">
                <div class="card-content">
                  <span class="card-title">Recent Posts</span>
                  <table class="striped">
                    <thead>
                      <tr>
                        <th>Title</th>
                        <th>Category</th>
                        <th></th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>Post One</td>
                        <td>Web Development</td>
                        <td>
                          <a href="details.html" class="btn blue lighten-2">
                            Details
                          </a>
                        </td>
                      </tr>
                      <tr>
                        <td>Post Two</td>
                        <td>Graphic Design</td>
                        <td>
                          <a href="details.html" class="btn blue lighten-2">
                            Details
                          </a>
                        </td>
                      </tr>
                      <tr>
                        <td>Post Three</td>
                        <td>Web Development</td>
                        <td>
                          <a href="details.html" class="btn blue lighten-2">
                            Details
                          </a>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
            <div class="col s12 m6 l4">
              <div class="card">
                <div class="card-content">
                  <span class="card-title">Quick Todos</span>
                  <form id="todo-form">
                    <div class="input-field">
                      <input id="todo" type="text" placeholder="Add Todo..." />
                    </div>
                  </form>
                  <ul class="collection todos">
                    <li class="collection-item">
                      <div>
                        Todo One
                        <a href="#!" class="secondary-content delete">
                          <i class="material-icons">close</i>
                        </a>
                      </div>
                    </li>
                    <li class="collection-item">
                      <div>
                        Todo Two
                        <a href="#!" class="secondary-content delete">
                          <i class="material-icons">close</i>
                        </a>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );

  // elem.style.visibility="hidden"
}

export default Navbar;
