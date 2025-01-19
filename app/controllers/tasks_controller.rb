class TasksController < ApplicationController
  before_action :authenticate_user!
  def index
    @tasks = Task.where(user_id: current_user.id)
  end

  def create
    @task = Task.new(task_params)
    @task.user_id = current_user.id

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

  def destroy
    fetch_task
    @task.destroy
  end

  private

  def task_params
    params.require(:task).permit(:description)
  end

  def fetch_task
    @task = Task.where(id: params[:id], user_id: current_user.id)
  end

  def authenticate_user!
    redirect_to new_user_session_path, alert: "Voce precisa fazer um login para acessar!" unless user_signed_in?
  end
end
