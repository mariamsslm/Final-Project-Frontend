import { createContext, useContext, useState } from "react";

const PostContext = createContext()

export const PostProvider = ({ children }) => {
    const [isSection, setIsSection] = useState(true)
    const [isDrawing, setIsDrawing] = useState(false)
    const [isPhotograph, setIsPhotograph] = useState(false)
    const [isWriting, setIsWriting] = useState(false)

    const handleSwitchSectionClick = () => {
        setIsSection(true)
        setIsDrawing(false)
        setIsPhotograph(false)
        setIsWriting(false)
    }

    const handleSwitchDrawingClick = () => {
        setIsSection(false)
        setIsDrawing(true)
        setIsPhotograph(false)
        setIsWriting(false)
    }

    const handleSwitchPhotographClick = () => {
        setIsSection(false)
        setIsDrawing(false)
        setIsPhotograph(true)
        setIsWriting(false)
    }

    const handleSwitchWritingClick = () => {
        setIsSection(false)
        setIsDrawing(false)
        setIsPhotograph(false)
        setIsWriting(true)
    }
return (
    <PostContext.Provider value={{
        isSection, isDrawing, isPhotograph, isWriting, handleSwitchSectionClick, handleSwitchDrawingClick, handleSwitchPhotographClick, handleSwitchWritingClick
    }}>
        {children}
    </PostContext.Provider>
)
}

export const usePostContext = () => {
    return useContext(PostContext)
}