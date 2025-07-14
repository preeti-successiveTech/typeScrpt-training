"use client";

import TaskList from "@/components/TaskList";

export default function showTask()
{
    return(<>
    <TaskList list= {['gym', 'milk', 'learn']}/>
    </>);
}