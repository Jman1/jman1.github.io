(ns jordanwebsites.env
  (:require [clojure.tools.logging :as log]))

(def defaults
  {:init
   (fn []
     (log/info "\n-=[jordanwebsites started successfully]=-"))
   :stop
   (fn []
     (log/info "\n-=[jordanwebsites has shut down successfully]=-"))
   :middleware identity})
