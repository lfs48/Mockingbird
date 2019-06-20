class Create < ActiveRecord::Migration[5.2]
  def change
    create_table :shares do |t|
      t.integer :secret_id, null: false
      t.integer :receiver_id, null: false
    end
    add_index :shares, [:secret_id, :receiver_id], unique: true
  end
end
