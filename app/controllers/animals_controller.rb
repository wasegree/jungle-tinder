class AnimalsController < ApplicationController
    def index
        animals = Animal.all
        render json: animals 
     end
 
     def create
         animal = Animal.create(animal_params)
 
         if animal.valid? 
             render json: animal
         else
             render json: animal.errors, status: 422
         end
     end
 
     def update
         animal = Animal.find(params[:id])
         animal.update(animal_params)
         render json: animal
     end
     
     def destroy
         animal = Animal.find(params[:id])  
         animal.destroy
         render json: animal
     end
 
     private
     def animal_params
         params.require(:animal).permit(:name, :age, :enjoys, :image, :user_id)
     end
end
