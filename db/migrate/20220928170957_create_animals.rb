class CreateAnimals < ActiveRecord::Migration[7.0]
  def change
    create_table :animals do |t|
      t.string :name
      t.integer :age
      t.string :enjoys
      t.text :image
      t.integer :user_id

      t.timestamps
    end
  end
end
