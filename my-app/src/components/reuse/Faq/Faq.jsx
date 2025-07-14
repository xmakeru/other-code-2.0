import { FAQ_ITEMS } from "@/config/constants/Faq";
import CustomAccordeon, {AccordeonItem} from "@/components/ui/CustomAccordeon";


export default function Faq() {
  return(
    <div
    className="px-main mb-to-footer">
      <h2 className="md:mb-[70px] mb-10">FAQ</h2>
      <CustomAccordeon>
        <ul
        className="border-t-[1px] border-grey cursor-pointer">
          {FAQ_ITEMS.map((e, index) => (
            <AccordeonItem
            key={index}
            value={index}
            trigger={e.title}
            classNameItem="py-4 sm:py-7  flex items-center justify-between cursor-pointer"
            classNameChildren="sm:py-7 py-4"
            classNameHeader="text-[20px] md:text-[36px] sm:text-[24px]"
            >
              
                <p>
                  {e.desc}
                </p>
            </AccordeonItem>
          ))}
        </ul>
      </CustomAccordeon>
    </div>
  )
}