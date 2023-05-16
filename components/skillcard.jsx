import { Icon } from '@iconify/react';

export default function SkillCard({ icon, iconName }) {
    return (
        <div className="bg-gray hover:bg-dark text-dark hover:text-light">
            <div className="flex flex-col items-center justify-between h-full pt-3 border-2 md:pt-6 border-dark dark:hover:border-light">
                <div className="px-8 text-6xl md:text-8xl">
                    <Icon icon={icon} />
                </div>
                <span className="pt-2 pb-2 font-mono text-lg md:pb-5">{iconName}</span>
            </div>
        </div>
    );
}
