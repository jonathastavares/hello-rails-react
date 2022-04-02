class ChangeThingsToGreetings < ActiveRecord::Migration[6.1]
  def change
    rename_table :things, :greetings
    rename_column :greetings, :thing, :greet
  end
end
