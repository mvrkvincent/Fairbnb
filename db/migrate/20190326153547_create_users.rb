class CreateUsers < ActiveRecord::Migration[5.2]
  def change
    create_table :users do |t|
      t.string :email, null: false
      t.string :fname, null: false
      t.string :lname, null: false
      t.string :img_url
      t.string :password_digest, null: false
      t.string :session_token, null: false
      t.index :email, unique: true
      t.index :session_token, unique: true

      t.timestamps
    end
  end
end
