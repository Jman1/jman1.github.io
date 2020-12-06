(ns jordanwebsites.doo-runner
  (:require [doo.runner :refer-macros [doo-tests]]
            [jordanwebsites.core-test]))

(doo-tests 'jordanwebsites.core-test)

