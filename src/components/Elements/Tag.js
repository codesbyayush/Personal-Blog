import Link from "next/link"
import { cx } from "@/src/utils"

const Tag = ({tag, ...props}) => {
  return (
    <Link href={`/cateogaries/${tag.split(" ").join("-")}`}
                      className={cx(props.className, 'bg-dark  capitalize border border-solid border-white  rounded-full max-w-min whitespace-nowrap hover:scale-105 ease duration-300 text-white')}
                  >
                    {tag}
                  </Link>
  )
}

export default Tag