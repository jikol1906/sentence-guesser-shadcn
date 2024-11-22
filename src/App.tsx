import './App.css'
import {Button} from "@/components/ui/button.tsx";
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue
} from "@/components/ui/select.tsx";
import {Textarea} from "@/components/ui/textarea.tsx";

function App() {

    return (
        <main className="flex h-screen items-center justify-center p-5">
            <div className="grid grid-cols-3 flex-1 max-w-screen-lg gap-4">
                <div className="flex justify-center col-span-3 mb-10">
                    <div className="relative text-2xl xs:text-3xl sm:text-4xl md:text-5xl leading-none">
                        <h1 className="grid grid-cols-[repeat(16,1fr)] gap-1 sm:gap-2 md:gap-4 lg:gap-6  font-mono font-thin uppercase">
                            {"sentence".split("").map((c, i) => <span key={i}
                                                                      className="border-b-[2px] pb-2 border-b-white">{c}</span>)}
                            <span> </span>
                            {"guesser".split("").map((c, i) => <span key={i}
                                                                     className="border-b-[2px] pb-2 border-b-white">{c}</span>)}
                        </h1>
                    </div>
                </div>
                <Textarea className="col-span-3 max-h-40"/>
                <Button>Translate sentence</Button>
                <Button variant="outline">Button 2</Button>
                <Select>
                    <SelectTrigger>
                        <SelectValue placeholder="Target language"/>
                    </SelectTrigger>
                    <SelectContent>
                        <SelectGroup>
                            <SelectLabel>Language</SelectLabel>
                            <SelectItem value="apple">Apple</SelectItem>
                            <SelectItem value="banana">Banana</SelectItem>
                            <SelectItem value="blueberry">Blueberry</SelectItem>
                            <SelectItem value="grapes">Grapes</SelectItem>
                            <SelectItem value="pineapple">Pineapple</SelectItem>
                        </SelectGroup>
                    </SelectContent>
                </Select>

            </div>
        </main>
    )
}

export default App
