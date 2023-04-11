class CreateBloodRequests < ActiveRecord::Migration[7.0]
  def change
    create_table :blood_requests do |t|
      t.string :blood_type
      t.belongs_to :user, null: false, foreign_key: true
      t.string :location
      t.datetime :date_time
      t.boolean :status

      t.timestamps
    end
  end
end
