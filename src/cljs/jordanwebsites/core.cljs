(ns jordanwebsites.core
  (:require
   [reagent.core :as r]
   [reagent.dom :as rdom]
   [goog.events :as events]
   [goog.history.EventType :as HistoryEventType]
   [markdown.core :refer [md->html]]
   [jordanwebsites.ajax :as ajax]
   [ajax.core :refer [GET POST]]
   [reitit.core :as reitit]
   [clojure.string :as string])
  (:import goog.History))

(defonce session (r/atom {:page :home}))

(defonce app-state (r/atom {:text "\"Truth can only be found in one place: the code. \""
                            :author "Robert C. Martin "}))

(defn fetch-link! [state]
  (GET "https://quote-garden.herokuapp.com/quotes/random"
    {:handler (fn [data]
                (swap! state assoc :text (get data "quoteText"))
                (swap! state assoc :author (get data "quoteAuthor")))
     :error-handler (fn [{:keys [status status-text]}]
                      (js/console.log status status-text))}))

(defn my-quote [state]
  [:div
   [:p.title.name "Random Quote Generator: "]
   [:div.job
    [:div.content.description
     [:p (:text @state)]
     [:p (:author @state)]]
    [:div.buttons.py-3
     [:button.button.is-medium.is-dark {:on-click #(fetch-link! state)} "Next Quote"]]]])

(defn img-right [][:div#right.image.my-6])

(defn footer-section []
  [:section
   [:div
    [:footer.footer
     [:div.content.has-text-centered.my-6.py-6
      [:p
       [:strong "Bulma"] " by "
       [:a {:href "https://jgthms.com"} "Jordan"]". The source code is licensed"
       [:a {:href "http://opensource.org/licenses/mit-license.php"} "MIT"] ". The website content is licensed "
       [:a {:href "http://creativecommons.org/licenses/by-nc-sa/4.0/"} "CC BY NC SA 4.0"] "."]]]]])

(defn nav-link [uri title page]
  [:a.navbar-item
   {:href   uri
    :class (when (= page (:page @session)) "is-active")}
   title])

(defn navbar []
  (r/with-let [expanded? (r/atom false)]
    [:nav.navbar.is-black>div.container
     [:div.navbar-brand
      [:a.navbar-item {:href "/" :style {:font-weight :bold}} "JhTheWebGuy"]
      [:span.navbar-burger.burger
       {:data-target :nav-menu
        :on-click #(swap! expanded? not)
        :class (when @expanded? :is-active)}
       [:span][:span][:span]]]
     [:div#nav-menu.navbar-menu
      {:class (when @expanded? :is-active)}
      [:div.navbar-start
       [nav-link "#/" "Home" :home]
       [nav-link "#/about" "About" :about]]]]))

;; -------------------------
;; Landing page

(defn landing-page []
  [:section
   [:div.landingpage-cover
    [:div#left.tile
     [:div.tile.is-child.pink.post
      [:p.mytitle.is-2.name "Hi, I'm Jordan"]
      [:p.mysubtitle.job "Web Designer & Developer"]
      [:div.content.description
       [my-quote app-state]]
      [:div.buttons
       [:button.button.is-medium.is-twitter  [:i.fab.fa-twitter.fa-lg]]
       [:button.button.is-medium.is-linkedin [:i.fab.fa-linkedin-in.fa-lg]]
       [:button.button.is-medium.is-facebook [:i.fab.fa-facebook-f.fa-lg]]
       [:button.button.is-medium.is-github   [:i.fab.fa-github.fa-lg]]]]
     [img-right]]]])

;; -------------------------
;; Portfolio Section

(defn portfolio-section []
  [:section
   [:div.columns
     [:div.column
      [:div.card
       [:header.card-header
        [:p.card-header-title
         [:span "AfroVan Connect"
          [:small]]
         [:span.is-pulled-left
          [:span.tag.is-default "WebSite"]
          [:span.tag.is-danger "CLJ"]]]]
       [:div.card-content
        [:figure.image
         [:img {:src "../img/ports/afrovan.png" :alt "Admin template screenshot"}]]]
       [:div.card-footer
        [:button.button.is-white.is-fullwidth.mt-1 "Preview"]]]

      [:br]

      [:div.card
       [:header.card-header
        [:p.card-header-title
         [:span "Bound By Bond"
          [:small]]
         [:span.is-pulled-left
          [:span.tag.is-default "WebSite"]
          [:span.tag.is-danger "Python"]]]]
       [:div.card-content
        [:figure.image
         [:img {:src "../img/ports/bbb.png" :alt "Admin template screenshot"}]]]
       [:div.card-footer
        [:button.button.is-white.is-fullwidth.mt-1 "Preview"]]]]

     [:div.column.is-4
      [:div.card
       [:header.card-header
        [:p.card-header-title
         [:span "ITC EasyPark "]
         [:span.is-pulled-left
          [:span.tag.is-default "Website"]
          [:span.tag.is-danger "Python"]]]]
       [:div.card-content
        [:figure.image
         [:img {:src "../img/ports/itc.png" :alt "Band template screenshot"}]]]
       [:div.card-footer
        [:button.button.is-white.is-fullwidth.mt-1 "Preview"]]]]

     [:div.column.is-4
      [:div.card
       [:header.card-header
        [:p.card-header-title
         [:span "AAA EasyPark"]
         [:span.is-pulled-left
          [:span.tag.is-default "Website"]
          [:span.tag.is-danger "Python"]]]]
       [:div.card-content
        [:figure.image
         [:img {:src "../img/ports/easypark.png" :alt "Blog template screenshot"}]]]
       [:div.card-footer
        [:button.button.is-white.is-fullwidth.mt-1 "Preview"]]]]]])

;; -------------------------
;; Skills Section

(defn skill-section []
  [:div.center-align
   [:div.hero.is-small.has-blue-bg
    [:div.hero-body
     [:div.container
      [:div.columns
       [:div.column
        [:img.feature-img {:src "../img/webpics/csshtml.svg" :alt "feature"}]]
       [:div.column
        [:div.card.htmlcss-custom-card
         [:div.card-content.job
          [:div.about-contont
           [:h3.title.is-size-3 "HTML & CSS"]
           [:p.subtitle "In-depth knowledge of the latest web technologies running the Internet.
                                         A focus on HTML/CSS across browsers support with a responsive and adaptive web design using modern front-end frameworks."]]]]]]]]]

   [:div.hero.is-small.has-yellow-bg
    [:div.hero-body
     [:div.container
      [:div.columns.reverse-row-order
       [:div.column
        [:div.card.js-custom-card
         [:div.card-content.job
          [:div.about-contont
           [:h3.title.is-size-3 "Javascript"]
           [:p.subtitle "The ability to write, maintain, and integrate code efficiently,
                         with strong UX/UI design skills.
                         Well, solving increasingly complex problems well delivering top quality code.
                         Familiar with the top Javascript frameworks (Nodejs, Jquery, and React)."]]]]]
       [:div.column
        [:img.feature-img {:src "../img/webpics/javascript.new.svg" :alt "feature"}]]]]]]

   [:div.hero.is-small.has-purple-bg
    [:div.hero-body
     [:div.container
      [:div.columns
       [:div.column
        [:img.feature-img {:src "../img/webpics/clojure-1.new.svg" :alt "feature"}]]
       [:div.column
        [:div.card.clojure-custom-card
         [:div.card-content.job
          [:div.about-contont
           [:h3.title.is-size-3 "Clojure & Clojurescript"]
           [:p.subtitle "Clojurescript a general-purpose programming language that
                         compiles to Javascript. With Reagent this provides a simple
                         easy to use wrapper for React.JS.
                         Offering a modern solution to building a complex front-end &
                         server-side web app with dynamic features."]]]]]]]]]

   [:div.hero.is-small.has-mustard-bg
    [:div.hero-body
     [:div.container
      [:div.columns.reverse-row-order
       [:div.column
        [:div.card.ubuntu-custom-card
         [:div.card-content.job
          [:div.about-contont
           [:h3.title.is-size-3 "Ubuntu"]
           [:p.subtitle "GNU/Linux desktop and server system administrator with a passion
                         for all things Open-Source. With experience in installation,
                         updating, configuring, and troubleshooting of various Linux/Windows10/MacOS based operating systems.
                         A understanding of the LAMP web service stack,  Cloud Architecture, networking, servers, storage, telephony, and virtualization. "]]]]]
       [:div.column
        [:img.feature-img {:src "../img/webpics/ubuntu.new.svg" :alt "feature"}]]]]]]])
;; -------------------------
;; Parallax

(defn parallax []
  [:div
   [:div#parallax-1.hero.is-fullheight
    [:div.hero-body {:style {:background "-webkit-radial-gradient(top center, ellipse cover, rgba(109,132,144,0.5) 5%,rgba(255,255,255,0.1) 600%)"}}
     [portfolio-section]]]])

;; -------------------------
;; About Section

(defn about-section []
  [:section.name
   [:div#about.section
    [:div.columns.has-same-height.is-gapless
     [:div.column
      [:div.card
       [:div.card-content.job
        [:h3.title.is-4 "Profile"]
        [:div.about-contont
         [:table.table-profile
          [:tbody
           [:tr
            [:th {:colspan "1"}]
            [:th {:colspan "2"}]]
           [:tr
            [:td "Name:"]
            [:td "Jordan"]]
           [:tr
            [:td "Phone:"]
            [:td "778-747-2066"]]
           [:tr
            [:td "Email:"]
            [:td "jhthewebguy@gmail.com"]]
           [:br]
           [:br]]]
         [:div.buttons
          [:button.button.is-medium.is-twitter
           [:i.fab.fa-twitter.fa-lg]]
          [:button.button.is-medium.is-linkedin [:i.fab.fa-linkedin-in.fa-lg]]
          [:button.button.is-medium.is-facebook [:i.fab.fa-facebook-f.fa-lg]]
          [:button.button.is-medium.is-github [:i.fab.fa-github.fa-lg]]]]]]]

     [:div.column
      [:div.job.py-3
       [:figure.image
        [:img {:src "../img/profile.png" :alt "Placeholder image"}]]]]

     [:div.column
      [:div.card
       [:div.card-content.skills-content.job
        [:h3.title.is-4 "Skills"]
        [:div.content.skills
         [:article.media
          [:div.media-content
           [:div.content
            [:p
             [:strong "ClojureScript:"]
             [:progress.progress.is-primary.skill {:value "80" :max "100"}]]]]]

         [:article.media
          [:div.media-content
           [:div.content.skills
            [:p [:strong "JavaScript"]
             [:progress.progress.is-primary.skill {:value "70" :max "100"}]]]]]

         [:article.media
          [:div.media-content
           [:div.content.skills
            [:p [:strong "Python"]
             [:progress.progress.is-primary.skill {:value "75" :max "100"}]]]]]

         [:article.media
          [:div.media-content
           [:div.content
            [:p [:strong "GNU/Linux"]
             [:progress.progress.is-primary.skill {:value "90" :max "100"}]]]]]

         [:article.media
          [:div.media-content
           [:div.content
            [:p [:strong "HTML/CSS"]
             [:progress.progress.is-primary.skill {:value "90" :max "100"}]]]]]]]]]]]

   [:div#portfolio.section.aboutus-cover
    [:div.container
     [:div.section-heading
      [:h3.mytitle.is-2 "My Portfolio"]
      [:h4.mysubtitle.is-5 "My Past Project And Works"]]]
    [:div
     [parallax]]]

   [:div#portfolio.section.aboutus-cover
    [:div.container
     [:div.section-heading
      [:h3.mytitle.is-2 "I'm A Full-Stack Developer"]
      [:h4.mysubtitle.is-5 ""]]]
    [:div
     [skill-section]]]])

;; -------------------------
;; Pages


(defn home-page []
  [:div
   [landing-page]
   [footer-section]])

(defn about-page []
  [:div
   [about-section]
   [footer-section]])

(defn port []
  [:div
   [parallax]
   [footer-section]])

(def pages
  {:home #'home-page
   :about #'about-page})

(defn page []
  [(pages (:page @session))])

;; -------------------------
;; Routes


(def router
  (reitit/router
   [["/" :home]
    ["/about" :about]]))

(defn match-route [uri]
  (->> (or (not-empty (string/replace uri #"^.*#" "")) "/")
       (reitit/match-by-path router)
       :data
       :name))
;; -------------------------
;; History
;; must be called after routes have been defined
(defn hook-browser-navigation! []
  (doto (History.)
    (events/listen
     HistoryEventType/NAVIGATE
     (fn [^js/Event.token event]
       (swap! session assoc :page (match-route (.-token event)))))
    (.setEnabled true)))

;; -------------------------
;; Initialize app
(defn fetch-docs! []
  (GET "/docs" {:handler #(swap! session assoc :docs %)}))

(defn mount-components []
  (rdom/render [#'navbar] (.getElementById js/document "navbar"))
  (rdom/render [#'page] (.getElementById js/document "app")))

(defn init! []
  (ajax/load-interceptors!)
  (fetch-docs!)
  (hook-browser-navigation!)
  (mount-components))
