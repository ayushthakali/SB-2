import AnimatedContent from "@/blocks/Animations/AnimatedContent/AnimatedContent";

function FooterAnimation({children,delay}) {
  return (
   <AnimatedContent
        distance={100}
        direction="vertical"
        reverse={false}
        duration={1}
        ease="power3.out"
        initialOpacity={0}
        threshold={0}
        delay={delay}
      >
        {children}
      </AnimatedContent>
  )
}

export default FooterAnimation;