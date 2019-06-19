class Secrets < ApplicationRecord 
    validates :message, :lat, :long, :time_start, :time_end
end