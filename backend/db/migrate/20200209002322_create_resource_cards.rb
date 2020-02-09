class CreateResourceCards < ActiveRecord::Migration[5.0]
  def change
    create_table :resource_cards do |t|
      t.string :identifier
      t.string :heading
      t.string :content
      t.boolean :show
      t.timestamps
    end
  end
end
