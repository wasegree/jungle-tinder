require 'rails_helper'

RSpec.describe "Animals", type: :request do
  describe "GET /index" do
    it 'returns a list of animals' do

      user = User.where(email: 'test@example.com').first_or_create(password: '12345678', password_confirmation: '12345678')

      user.animals.create(
        name: 'Darwin',
        age: 6,
        enjoys: 'Long naps',
        image: 'https://images.unsplash.com/photo-1522435229388-6f7a422cd95b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
        )
    
    get '/animals'

        animals = JSON.parse(response.body)
        expect(response).to have_http_status(200)
        expect(animals.length).to eq(1)
    end
  end

    describe "POST /create" do  
      it"creates a new animal" do
        user = User.where(email: 'test@example.com').first_or_create(password: '12345678', password_confirmation: '12345678')
    
        animal_params ={
          animal: {
            name: 'Darwin',
            age: 6,
            enjoys: 'Long naps',
            image: 'https://images.unsplash.com/photo-1522435229388-6f7a422cd95b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
            user_id: user.id         
          }
        }
    
      post '/animals', params: animal_params

      animal = JSON.parse(response.body)
      expect(response).to have_http_status(200)
      
      expect(animal['name']).to eq "Darwin"
      expect(animal['age']).to eq 6
      expect(animal['enjoys']).to eq "Long naps"
      expect(animal['image']).to eq "https://images.unsplash.com/photo-1522435229388-6f7a422cd95b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
    end

    it "doesn't create a animal without a name" do

      user = User.where(email: 'test@example.com').first_or_create(password: '12345678', password_confirmation: '12345678')

      animal_params ={
          animal: {
            age: 6,
            enjoys: 'Long naps',
            image: 'https://images.unsplash.com/photo-1522435229388-6f7a422cd95b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
            user_id: user.id  
        }
      }

      post "/animals", params: animal_params
      expect(response.status).to eq 422
      animal = JSON.parse(response.body)
      expect(animal['name']).to include "can't be blank" 
    end

    it "doesn't create a animal without an age" do

      user = User.where(email: 'test@example.com').first_or_create(password: '12345678', password_confirmation: '12345678')

      animal_params ={
          animal: {
            name: 'Darwin',
            enjoys: 'Long naps',
            image: 'https://images.unsplash.com/photo-1522435229388-6f7a422cd95b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
            user_id: user.id  
        }
      }

      post "/animals", params: animal_params
      expect(response.status).to eq 422
      animal = JSON.parse(response.body)
      expect(animal['age']).to include "can't be blank" 
    end

    it "doesn't create a animal without enjoys" do

      user = User.where(email: 'test@example.com').first_or_create(password: '12345678', password_confirmation: '12345678')

      animal_params ={
          animal: {
            name: 'Darwin',
            age: 6,
            image: 'https://images.unsplash.com/photo-1522435229388-6f7a422cd95b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
            user_id: user.id  
        }
      }

      post "/animals", params: animal_params
      expect(response.status).to eq 422
      animal = JSON.parse(response.body)
      expect(animal['enjoys']).to include "can't be blank" 
    end

    it "doesn't create a animal without an image" do

      user = User.where(email: 'test@example.com').first_or_create(password: '12345678', password_confirmation: '12345678')

      animal_params ={
          animal: {
            name: 'Darwin',
            age: 6,
            enjoys: 'Long naps',
            user_id: user.id  
        }
      }

      post "/animals", params: animal_params
      expect(response.status).to eq 422
      animal = JSON.parse(response.body)
      expect(animal['image']).to include "can't be blank" 
    end
  end

  describe "PATCH /update" do
    
    it"updates an existing animal" do
      user = User.where(email: 'test@example.com').first_or_create(password: '12345678', password_confirmation: '12345678')
  
      animal_params ={
        animal: {
          name: 'Darwin',
          age: 6,
          enjoys: 'Long naps',
          image: 'https://images.unsplash.com/photo-1522435229388-6f7a422cd95b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
          user_id: user.id
      }
    }
  
    post '/animals', params: animal_params
    animal = Animal.first

    updated_animal_params = {
      animal: {
        name: 'Darwin',
        age: 7,
        enjoys: 'Long naps',
        image: 'https://images.unsplash.com/photo-1522435229388-6f7a422cd95b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
        user_id: user.id  

      }
    }

      patch "/animals/#{animal.id}", params: updated_animal_params
      updated_animal = Animal.find(animal.id)
      expect(response).to have_http_status(200)
      
      expect(updated_animal.age).to eq 7
     end
  end

  describe"DELETE /destroy" do
    it"deletes a animal" do

      user = User.where(email: 'test@example.com').first_or_create(password: '12345678', password_confirmation: '12345678')
      
      animal_params = {
        animal: {
        name: 'Darwin',
        age: 6,
        enjoys: 'Long naps',
        image: 'https://images.unsplash.com/photo-1522435229388-6f7a422cd95b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
        user_id: user.id  
      }
    }

      post "/animals", params: animal_params
      animal = Animal.first
      delete"/animals/#{animal.id}"
      expect(response).to have_http_status(200)
      animals = Animal.all
      expect(animals).to be_empty
    end
  end
end

