require 'rails_helper'

RSpec.describe Animal, type: :model do
  user = User.where(email: 'test1@test.test').first_or_create(password: '12345678', password_confirmation: '12345678')

  it 'checks that Animal exists' do
    animal = user.animals.create(
      name: 'Darwin',
      age: 6,
      enjoys: 'Long naps',
      image: 'https://images.unsplash.com/photo-1522435229388-6f7a422cd95b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
    )
    expect(animal).to be_valid
  end
  it 'is not valid without a name' do
    animal = user.animals.create(
      age: 6,
      enjoys: 'Long naps',
      image: 'https://images.unsplash.com/photo-1522435229388-6f7a422cd95b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
    )
    expect(animal.errors[:name]).to_not be_empty
  end
  it 'is not valid without an age' do
    animal = user.animals.create(
      name: 'Darwin',
      enjoys: 'Long naps',
      image: 'https://images.unsplash.com/photo-1522435229388-6f7a422cd95b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
    )
    expect(animal.errors[:age]).to_not be_empty
  end
  it 'is not valid without enjoys' do
    animal = user.animals.create(
      name: 'Darwin',
      age: 6,
      image: 'https://images.unsplash.com/photo-1522435229388-6f7a422cd95b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
    )
    expect(animal.errors[:enjoys]).to_not be_empty
  end
  it 'is not valid without an image' do
    animal = user.animals.create(
      name: 'Darwin',
      age: 6,
      enjoys: 'Long naps'
    )
    expect(animal.errors[:image]).to_not be_empty
  end
end
