class TasksController < ApplicationController
  def index
  end

  def create
    @task = Task.create(task_params)

    render :index
  end

  private

  def task_params
    params.require(:task).permit(:description)
  end
end
