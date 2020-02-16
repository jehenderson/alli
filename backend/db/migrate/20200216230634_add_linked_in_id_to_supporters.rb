class AddLinkedInIdToSupporters < ActiveRecord::Migration[5.0]
  def change
    add_column :supporters, :linkedin_id, :string
  end
end
