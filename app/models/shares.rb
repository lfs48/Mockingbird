class Shares < ApplicationRecord
    validates :secret_id, :receiver_id, presence: true

    belongs_to :secret
    belongs_to :user

end