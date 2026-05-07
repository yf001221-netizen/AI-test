from fastapi import APIRouter
from pydantic import BaseModel
from app.agent.brain import process_command

router = APIRouter()

class CommandRequest(BaseModel):
    command: str

@router.post("/command")
async def command(req: CommandRequest):
    result = await process_command(req.command)
    return {"success": True, "result": result}
