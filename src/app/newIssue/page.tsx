"use client"
import { Button, TextArea, TextField } from "@radix-ui/themes"

const newIssuePage = () => {
    return (
        <div className="max-w-xl space-y-3">
            <TextField.Root placeholder="Title">
                <TextField.Slot>
                    
                </TextField.Slot>
            </TextField.Root>
            <TextArea placeholder="Description" />
            <Button>Submit</Button>
        </div>
    )
}

export default newIssuePage