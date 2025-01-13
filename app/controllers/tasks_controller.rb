class TasksController < ApplicationController
  def index
    @tasks = Task.all
  end

  def create
    @task = Task.new(task_params)
    if @task.save
      respond_to do |format|
        format.turbo_stream
        format.html { redirect_to tasks_path, notice: "Task was successfully created." }
      end
    else
      respond_to do |format|
        format.turbo_stream
        format.html { redirec_to tasks_path, status: :unprocessable_entity }
      end
    end
  end

  private

  def task_params
    params.require(:task).permit(:description)
  end
end
