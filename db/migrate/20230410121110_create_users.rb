class CreateUsers < ActiveRecord::Migration[7.0]
  def change
    create_table :users do |t|
      t.string :firstname
      t.string :lastname
      t.string :email
      t.string :phone_number
      t.string :password_digest
      t.string :blood_type
      t.string :role
      t.boolean :availability

      t.timestamps
    end
  end
end
