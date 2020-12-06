(ns jordanwebsites.env
  (:require
    [selmer.parser :as parser]
    [clojure.tools.logging :as log]
    [jordanwebsites.dev-middleware :refer [wrap-dev]]))

(def defaults
  {:init
   (fn []
     (parser/cache-off!)
     (log/info "\n-=[jordanwebsites started successfully using the development profile]=-"))
   :stop
   (fn []
     (log/info "\n-=[jordanwebsites has shut down successfully]=-"))
   :middleware wrap-dev})
