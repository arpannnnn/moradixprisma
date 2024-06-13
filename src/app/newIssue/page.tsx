"use client"
import { Button, TextArea, TextField } from "@radix-ui/themes"
import SimpleMDE from "react-simplemde-editor";
import "easymde/dist/easymde.min.css";
const newIssuePage = () => {
    return (
        <div className="max-w-xl space-y-3">
            <TextField.Root placeholder="Title">
                <TextField.Slot>
                    
                </TextField.Slot>
            </TextField.Root>
            <SimpleMDE  placeholder="Description" />
            <Button>Submit</Button>
        </div>
    )
}

export default newIssuePage