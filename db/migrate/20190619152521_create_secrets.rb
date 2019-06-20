class CreateSecrets < ActiveRecord::Migration[5.2]
  def change
    create_table :secrets do |t|
      t.text :message, null: false
      t.float :lat, null: false
      t.float :long, null: false
      t.datetime :time_start, null: false
      t.datetime :time_end, null: false
      t.timestamps
    end
  end
end
