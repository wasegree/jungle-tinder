class Animal < ApplicationRecord
    belongs_to :user
    validates :name, :age, :enjoys, :image, presence: true
end
