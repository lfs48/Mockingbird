class Shares < ApplicationRecord
    validates :secret_id, :receiver_id
end