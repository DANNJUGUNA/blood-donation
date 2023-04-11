# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema[7.0].define(version: 2023_04_10_133527) do
  create_table "appointments", force: :cascade do |t|
    t.datetime "date_time"
    t.string "location"
    t.boolean "status"
    t.integer "donor_id", null: false
    t.integer "recipient_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["donor_id"], name: "index_appointments_on_donor_id"
    t.index ["recipient_id"], name: "index_appointments_on_recipient_id"
  end

  create_table "blood_requests", force: :cascade do |t|
    t.string "blood_type"
    t.integer "user_id", null: false
    t.string "location"
    t.datetime "date_time"
    t.boolean "status"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["user_id"], name: "index_blood_requests_on_user_id"
  end

  create_table "users", force: :cascade do |t|
    t.string "firstname"
    t.string "lastname"
    t.string "email"
    t.string "phone_number"
    t.string "password_digest"
    t.string "blood_type"
    t.string "role"
    t.boolean "availability"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  add_foreign_key "appointments", "donors"
  add_foreign_key "appointments", "recipients"
  add_foreign_key "blood_requests", "users"
end