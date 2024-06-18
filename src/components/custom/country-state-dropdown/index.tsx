"use client";

/* -------------------------------------------------------------------------- */
/*                             External Dependency                            */
/* -------------------------------------------------------------------------- */

import React from "react";
import { Check, ChevronsUpDown } from "lucide-react";

/* -------------------------------------------------------------------------- */
/*                             Internal Dependency                            */
/* -------------------------------------------------------------------------- */

import { Button } from "@/components/ui/button";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem } from "@/components/ui/command";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";

import { cn, lowerCase, sentenceCase } from "@/lib/utils";
import countries from "@/data/countries.json";
import states from "@/data/states.json";

import { StateProps, type CountryProps } from "./types";
import { useDropdownStore } from "./dropdown-store";

interface CountryDropdownProps {
    disabled?: boolean;
}

export const CountryDropdown = ({ disabled }: CountryDropdownProps) => {
    const { countryValue, setCountryValue, openCountryDropdown, setOpenCountryDropdown } = useDropdownStore();
    const C = countries as CountryProps[];

    return (
        <Popover open={openCountryDropdown} onOpenChange={setOpenCountryDropdown}>
            <PopoverTrigger asChild>
                <Button
                    variant="outline"
                    role="combobox"
                    aria-expanded={openCountryDropdown}
                    className="w-[300px] justify-between rounded-[6px] border !border-[#27272a] !bg-[#0f0f11] hover:!bg-[#0f0f11] focus:!bg-[#0f0f11] focus:!outline-none focus:!ring-2 focus:!ring-[#0f0f11] focus:!ring-offset-2 focus:!ring-offset-[#0f0f11]"
                    disabled={disabled}
                >
                    <span>
                        {countryValue ? (
                            <div className="flex items-end gap-2">
                                <span>{countries.find((country) => lowerCase(country.name) === countryValue)?.emoji}</span>
                                <span>{countries.find((country) => lowerCase(country.name) === countryValue)?.name}</span>
                            </div>
                        ) : (
                            <span>Select Country...</span>
                        )}
                    </span>
                    <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                </Button>
            </PopoverTrigger>
            <PopoverContent className="w-[300px] rounded-[6px] border border-[#27272a] p-0">
                <Command>
                    <CommandInput placeholder="Search country..." />
                    <CommandEmpty>No country found.</CommandEmpty>
                    <CommandGroup>
                        <ScrollArea className="h-[300px] w-full">
                            {C.map((country) => (
                                <CommandItem
                                    key={country.id}
                                    value={country.name}
                                    onSelect={(currentValue) => {
                                        setCountryValue(currentValue === lowerCase(country.name) ? currentValue : "");
                                        setOpenCountryDropdown(false);
                                    }}
                                    className="flex cursor-pointer items-center justify-between text-xs hover:!bg-[#27272a] hover:!text-white"
                                >
                                    <div className="flex items-end gap-2">
                                        <span>{country.emoji}</span>
                                        <span className="">{country.name}</span>
                                    </div>
                                    <Check className={cn("mr-2 h-4 w-4", countryValue === lowerCase(country.name) ? "opacity-100" : "opacity-0")} />
                                </CommandItem>
                            ))}
                            <ScrollBar orientation="vertical" />
                        </ScrollArea>
                    </CommandGroup>
                </Command>
            </PopoverContent>
        </Popover>
    );
};

export const StateDropdown = () => {
    const { countryValue, stateValue, openStateDropdown, setOpenStateDropdown, setStateValue } = useDropdownStore();

    const SD = states as StateProps[];
    const S = SD.filter((state) => state.country_name === sentenceCase(countryValue));

    return (
        <Popover open={openStateDropdown} onOpenChange={setOpenStateDropdown}>
            <PopoverTrigger asChild>
                <Button
                    variant="outline"
                    role="combobox"
                    aria-expanded={openStateDropdown}
                    className="w-[300px] cursor-pointer justify-between rounded-[6px] border !border-[#27272a] !bg-[#0f0f11] hover:!bg-[#0f0f11] focus:!bg-[#0f0f11] focus:!outline-none focus:!ring-2 focus:!ring-[#0f0f11] focus:!ring-offset-2 focus:!ring-offset-[#0f0f11] disabled:!cursor-not-allowed disabled:!opacity-50"
                    disabled={!countryValue || S.length === 0}
                >
                    {stateValue ? (
                        <div className="flex items-end gap-2">
                            <span>{S.find((state) => lowerCase(state.name) === stateValue)?.name}</span>
                        </div>
                    ) : (
                        <span>Select State...</span>
                    )}
                    <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                </Button>
            </PopoverTrigger>
            <PopoverContent className="w-[300px] rounded-[6px] border border-[#27272a] p-0">
                <Command>
                    <CommandInput placeholder="Search state..." />
                    <CommandEmpty>No state found.</CommandEmpty>
                    <CommandGroup>
                        <ScrollArea className="h-[300px] w-full">
                            {S.map((state) => (
                                <CommandItem
                                    key={state.id}
                                    value={state.name}
                                    onSelect={(currentValue) => {
                                        setStateValue(currentValue === lowerCase(state.name) ? currentValue : "");
                                        setOpenStateDropdown(false);
                                    }}
                                    className="flex cursor-pointer items-center justify-between text-xs hover:!bg-[#27272a] hover:!text-white"
                                >
                                    <div className="flex items-end gap-2">
                                        <span className="">{state.name}</span>
                                    </div>
                                    <Check className={cn("mr-2 h-4 w-4", stateValue === lowerCase(state.name) ? "opacity-100" : "opacity-0")} />
                                </CommandItem>
                            ))}
                            <ScrollBar orientation="vertical" />
                        </ScrollArea>
                    </CommandGroup>
                </Command>
            </PopoverContent>
        </Popover>
    );
};

export default StateDropdown;
