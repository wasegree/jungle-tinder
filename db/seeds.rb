user = User.where(email: 'test1@test.test').first_or_create(password: '12345678', password_confirmation: '12345678')


user_animals = [
  {
    name: 'Darwin',
    age: 6,
    enjoys: 'Long naps',
    image: 'https://images.unsplash.com/photo-1522435229388-6f7a422cd95b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
  },
  {
    name: 'Cloud',
    age: 12,
    enjoys: 'Stalking Prey',
    image: 'https://images.unsplash.com/photo-1591699335321-5adb2e169cbc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=928&q=80'
  },
  {
    name: 'Jack',
    age: 5,
    enjoys: 'Long walks in the jungle',
    image: 'https://images.unsplash.com/photo-1579822169678-02aaef1e05dc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80'
  }
]

user_animals.each do |attributes|
    user.animals.create(attributes)
    p"each animal attributes #{attributes}"
end
