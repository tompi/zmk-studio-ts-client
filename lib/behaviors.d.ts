import * as _m0 from "protobufjs/minimal";
export declare const protobufPackage = "zmk.behaviors";
export declare enum SetBehaviorSettingResponse {
    SET_BEHAVIOR_SETTING_RESP_OK = 0,
    SET_BEHAVIOR_SETTING_RESP_INVALID_BEHAVIOR = 1,
    SET_BEHAVIOR_SETTING_RESP_INVALID_SETTING = 2,
    SET_BEHAVIOR_SETTING_RESP_INVALID_VALUE = 3,
    UNRECOGNIZED = -1
}
export declare function setBehaviorSettingResponseFromJSON(object: any): SetBehaviorSettingResponse;
export declare function setBehaviorSettingResponseToJSON(object: SetBehaviorSettingResponse): string;
export interface Request {
    listAllBehaviors?: boolean | undefined;
    getBehaviorDetails?: GetBehaviorDetailsRequest | undefined;
    getBehaviorSettings?: GetBehaviorSettingsRequest | undefined;
    setBehaviorSetting?: SetBehaviorSettingRequest | undefined;
}
export interface GetBehaviorDetailsRequest {
    behaviorId: number;
}
export interface Response {
    listAllBehaviors?: ListAllBehaviorsResponse | undefined;
    getBehaviorDetails?: GetBehaviorDetailsResponse | undefined;
    getBehaviorSettings?: GetBehaviorSettingsResponse | undefined;
    setBehaviorSetting?: SetBehaviorSettingResponse | undefined;
}
export interface ListAllBehaviorsResponse {
    behaviors: number[];
}
export interface GetBehaviorDetailsResponse {
    id: number;
    displayName: string;
    metadata: BehaviorBindingParametersSet[];
}
export interface BehaviorBindingParametersSet {
    param1: BehaviorParameterValueDescription[];
    param2: BehaviorParameterValueDescription[];
}
export interface BehaviorParameterValueDescriptionRange {
    min: number;
    max: number;
}
export interface BehaviorParameterNil {
}
export interface BehaviorParameterLayerId {
}
export interface BehaviorParameterHidUsage {
    keyboardMax: number;
    consumerMax: number;
}
export interface BehaviorParameterValueDescription {
    name: string;
    nil?: BehaviorParameterNil | undefined;
    constant?: number | undefined;
    range?: BehaviorParameterValueDescriptionRange | undefined;
    hidUsage?: BehaviorParameterHidUsage | undefined;
    layerId?: BehaviorParameterLayerId | undefined;
}
export interface GetBehaviorSettingsRequest {
    behaviorId: number;
}
export interface GetBehaviorSettingsResponse {
    behaviorId: number;
    settings: BehaviorSetting[];
}
export interface BehaviorSetting {
    id: number;
    name: string;
    value: number;
    defaultValue: number;
    range?: BehaviorSettingRange | undefined;
    options?: BehaviorSettingOptions | undefined;
    toggle?: BehaviorSettingToggle | undefined;
}
export interface BehaviorSettingRange {
    min: number;
    max: number;
    unit: string;
}
/** The value is the index of the chosen option. */
export interface BehaviorSettingOptions {
    options: string[];
}
/** The value is 0 or 1. */
export interface BehaviorSettingToggle {
}
export interface SetBehaviorSettingRequest {
    behaviorId: number;
    settingId: number;
    value: number;
}
export declare const Request: {
    encode(message: Request, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): Request;
    fromJSON(object: any): Request;
    toJSON(message: Request): unknown;
    create<I extends {
        listAllBehaviors?: boolean | undefined;
        getBehaviorDetails?: {
            behaviorId?: number | undefined;
        } | undefined;
        getBehaviorSettings?: {
            behaviorId?: number | undefined;
        } | undefined;
        setBehaviorSetting?: {
            behaviorId?: number | undefined;
            settingId?: number | undefined;
            value?: number | undefined;
        } | undefined;
    } & {
        listAllBehaviors?: boolean | undefined;
        getBehaviorDetails?: ({
            behaviorId?: number | undefined;
        } & {
            behaviorId?: number | undefined;
        } & { [K in Exclude<keyof I["getBehaviorDetails"], "behaviorId">]: never; }) | undefined;
        getBehaviorSettings?: ({
            behaviorId?: number | undefined;
        } & {
            behaviorId?: number | undefined;
        } & { [K_1 in Exclude<keyof I["getBehaviorSettings"], "behaviorId">]: never; }) | undefined;
        setBehaviorSetting?: ({
            behaviorId?: number | undefined;
            settingId?: number | undefined;
            value?: number | undefined;
        } & {
            behaviorId?: number | undefined;
            settingId?: number | undefined;
            value?: number | undefined;
        } & { [K_2 in Exclude<keyof I["setBehaviorSetting"], keyof SetBehaviorSettingRequest>]: never; }) | undefined;
    } & { [K_3 in Exclude<keyof I, keyof Request>]: never; }>(base?: I | undefined): Request;
    fromPartial<I_1 extends {
        listAllBehaviors?: boolean | undefined;
        getBehaviorDetails?: {
            behaviorId?: number | undefined;
        } | undefined;
        getBehaviorSettings?: {
            behaviorId?: number | undefined;
        } | undefined;
        setBehaviorSetting?: {
            behaviorId?: number | undefined;
            settingId?: number | undefined;
            value?: number | undefined;
        } | undefined;
    } & {
        listAllBehaviors?: boolean | undefined;
        getBehaviorDetails?: ({
            behaviorId?: number | undefined;
        } & {
            behaviorId?: number | undefined;
        } & { [K_4 in Exclude<keyof I_1["getBehaviorDetails"], "behaviorId">]: never; }) | undefined;
        getBehaviorSettings?: ({
            behaviorId?: number | undefined;
        } & {
            behaviorId?: number | undefined;
        } & { [K_5 in Exclude<keyof I_1["getBehaviorSettings"], "behaviorId">]: never; }) | undefined;
        setBehaviorSetting?: ({
            behaviorId?: number | undefined;
            settingId?: number | undefined;
            value?: number | undefined;
        } & {
            behaviorId?: number | undefined;
            settingId?: number | undefined;
            value?: number | undefined;
        } & { [K_6 in Exclude<keyof I_1["setBehaviorSetting"], keyof SetBehaviorSettingRequest>]: never; }) | undefined;
    } & { [K_7 in Exclude<keyof I_1, keyof Request>]: never; }>(object: I_1): Request;
};
export declare const GetBehaviorDetailsRequest: {
    encode(message: GetBehaviorDetailsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): GetBehaviorDetailsRequest;
    fromJSON(object: any): GetBehaviorDetailsRequest;
    toJSON(message: GetBehaviorDetailsRequest): unknown;
    create<I extends {
        behaviorId?: number | undefined;
    } & {
        behaviorId?: number | undefined;
    } & { [K in Exclude<keyof I, "behaviorId">]: never; }>(base?: I | undefined): GetBehaviorDetailsRequest;
    fromPartial<I_1 extends {
        behaviorId?: number | undefined;
    } & {
        behaviorId?: number | undefined;
    } & { [K_1 in Exclude<keyof I_1, "behaviorId">]: never; }>(object: I_1): GetBehaviorDetailsRequest;
};
export declare const Response: {
    encode(message: Response, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): Response;
    fromJSON(object: any): Response;
    toJSON(message: Response): unknown;
    create<I extends {
        listAllBehaviors?: {
            behaviors?: number[] | undefined;
        } | undefined;
        getBehaviorDetails?: {
            id?: number | undefined;
            displayName?: string | undefined;
            metadata?: {
                param1?: {
                    name?: string | undefined;
                    nil?: {} | undefined;
                    constant?: number | undefined;
                    range?: {
                        min?: number | undefined;
                        max?: number | undefined;
                    } | undefined;
                    hidUsage?: {
                        keyboardMax?: number | undefined;
                        consumerMax?: number | undefined;
                    } | undefined;
                    layerId?: {} | undefined;
                }[] | undefined;
                param2?: {
                    name?: string | undefined;
                    nil?: {} | undefined;
                    constant?: number | undefined;
                    range?: {
                        min?: number | undefined;
                        max?: number | undefined;
                    } | undefined;
                    hidUsage?: {
                        keyboardMax?: number | undefined;
                        consumerMax?: number | undefined;
                    } | undefined;
                    layerId?: {} | undefined;
                }[] | undefined;
            }[] | undefined;
        } | undefined;
        getBehaviorSettings?: {
            behaviorId?: number | undefined;
            settings?: {
                id?: number | undefined;
                name?: string | undefined;
                value?: number | undefined;
                defaultValue?: number | undefined;
                range?: {
                    min?: number | undefined;
                    max?: number | undefined;
                    unit?: string | undefined;
                } | undefined;
                options?: {
                    options?: string[] | undefined;
                } | undefined;
                toggle?: {} | undefined;
            }[] | undefined;
        } | undefined;
        setBehaviorSetting?: SetBehaviorSettingResponse | undefined;
    } & {
        listAllBehaviors?: ({
            behaviors?: number[] | undefined;
        } & {
            behaviors?: (number[] & number[] & { [K in Exclude<keyof I["listAllBehaviors"]["behaviors"], keyof number[]>]: never; }) | undefined;
        } & { [K_1 in Exclude<keyof I["listAllBehaviors"], "behaviors">]: never; }) | undefined;
        getBehaviorDetails?: ({
            id?: number | undefined;
            displayName?: string | undefined;
            metadata?: {
                param1?: {
                    name?: string | undefined;
                    nil?: {} | undefined;
                    constant?: number | undefined;
                    range?: {
                        min?: number | undefined;
                        max?: number | undefined;
                    } | undefined;
                    hidUsage?: {
                        keyboardMax?: number | undefined;
                        consumerMax?: number | undefined;
                    } | undefined;
                    layerId?: {} | undefined;
                }[] | undefined;
                param2?: {
                    name?: string | undefined;
                    nil?: {} | undefined;
                    constant?: number | undefined;
                    range?: {
                        min?: number | undefined;
                        max?: number | undefined;
                    } | undefined;
                    hidUsage?: {
                        keyboardMax?: number | undefined;
                        consumerMax?: number | undefined;
                    } | undefined;
                    layerId?: {} | undefined;
                }[] | undefined;
            }[] | undefined;
        } & {
            id?: number | undefined;
            displayName?: string | undefined;
            metadata?: ({
                param1?: {
                    name?: string | undefined;
                    nil?: {} | undefined;
                    constant?: number | undefined;
                    range?: {
                        min?: number | undefined;
                        max?: number | undefined;
                    } | undefined;
                    hidUsage?: {
                        keyboardMax?: number | undefined;
                        consumerMax?: number | undefined;
                    } | undefined;
                    layerId?: {} | undefined;
                }[] | undefined;
                param2?: {
                    name?: string | undefined;
                    nil?: {} | undefined;
                    constant?: number | undefined;
                    range?: {
                        min?: number | undefined;
                        max?: number | undefined;
                    } | undefined;
                    hidUsage?: {
                        keyboardMax?: number | undefined;
                        consumerMax?: number | undefined;
                    } | undefined;
                    layerId?: {} | undefined;
                }[] | undefined;
            }[] & ({
                param1?: {
                    name?: string | undefined;
                    nil?: {} | undefined;
                    constant?: number | undefined;
                    range?: {
                        min?: number | undefined;
                        max?: number | undefined;
                    } | undefined;
                    hidUsage?: {
                        keyboardMax?: number | undefined;
                        consumerMax?: number | undefined;
                    } | undefined;
                    layerId?: {} | undefined;
                }[] | undefined;
                param2?: {
                    name?: string | undefined;
                    nil?: {} | undefined;
                    constant?: number | undefined;
                    range?: {
                        min?: number | undefined;
                        max?: number | undefined;
                    } | undefined;
                    hidUsage?: {
                        keyboardMax?: number | undefined;
                        consumerMax?: number | undefined;
                    } | undefined;
                    layerId?: {} | undefined;
                }[] | undefined;
            } & {
                param1?: ({
                    name?: string | undefined;
                    nil?: {} | undefined;
                    constant?: number | undefined;
                    range?: {
                        min?: number | undefined;
                        max?: number | undefined;
                    } | undefined;
                    hidUsage?: {
                        keyboardMax?: number | undefined;
                        consumerMax?: number | undefined;
                    } | undefined;
                    layerId?: {} | undefined;
                }[] & ({
                    name?: string | undefined;
                    nil?: {} | undefined;
                    constant?: number | undefined;
                    range?: {
                        min?: number | undefined;
                        max?: number | undefined;
                    } | undefined;
                    hidUsage?: {
                        keyboardMax?: number | undefined;
                        consumerMax?: number | undefined;
                    } | undefined;
                    layerId?: {} | undefined;
                } & {
                    name?: string | undefined;
                    nil?: ({} & {} & { [K_2 in Exclude<keyof I["getBehaviorDetails"]["metadata"][number]["param1"][number]["nil"], never>]: never; }) | undefined;
                    constant?: number | undefined;
                    range?: ({
                        min?: number | undefined;
                        max?: number | undefined;
                    } & {
                        min?: number | undefined;
                        max?: number | undefined;
                    } & { [K_3 in Exclude<keyof I["getBehaviorDetails"]["metadata"][number]["param1"][number]["range"], keyof BehaviorParameterValueDescriptionRange>]: never; }) | undefined;
                    hidUsage?: ({
                        keyboardMax?: number | undefined;
                        consumerMax?: number | undefined;
                    } & {
                        keyboardMax?: number | undefined;
                        consumerMax?: number | undefined;
                    } & { [K_4 in Exclude<keyof I["getBehaviorDetails"]["metadata"][number]["param1"][number]["hidUsage"], keyof BehaviorParameterHidUsage>]: never; }) | undefined;
                    layerId?: ({} & {} & { [K_5 in Exclude<keyof I["getBehaviorDetails"]["metadata"][number]["param1"][number]["layerId"], never>]: never; }) | undefined;
                } & { [K_6 in Exclude<keyof I["getBehaviorDetails"]["metadata"][number]["param1"][number], keyof BehaviorParameterValueDescription>]: never; })[] & { [K_7 in Exclude<keyof I["getBehaviorDetails"]["metadata"][number]["param1"], keyof {
                    name?: string | undefined;
                    nil?: {} | undefined;
                    constant?: number | undefined;
                    range?: {
                        min?: number | undefined;
                        max?: number | undefined;
                    } | undefined;
                    hidUsage?: {
                        keyboardMax?: number | undefined;
                        consumerMax?: number | undefined;
                    } | undefined;
                    layerId?: {} | undefined;
                }[]>]: never; }) | undefined;
                param2?: ({
                    name?: string | undefined;
                    nil?: {} | undefined;
                    constant?: number | undefined;
                    range?: {
                        min?: number | undefined;
                        max?: number | undefined;
                    } | undefined;
                    hidUsage?: {
                        keyboardMax?: number | undefined;
                        consumerMax?: number | undefined;
                    } | undefined;
                    layerId?: {} | undefined;
                }[] & ({
                    name?: string | undefined;
                    nil?: {} | undefined;
                    constant?: number | undefined;
                    range?: {
                        min?: number | undefined;
                        max?: number | undefined;
                    } | undefined;
                    hidUsage?: {
                        keyboardMax?: number | undefined;
                        consumerMax?: number | undefined;
                    } | undefined;
                    layerId?: {} | undefined;
                } & {
                    name?: string | undefined;
                    nil?: ({} & {} & { [K_8 in Exclude<keyof I["getBehaviorDetails"]["metadata"][number]["param2"][number]["nil"], never>]: never; }) | undefined;
                    constant?: number | undefined;
                    range?: ({
                        min?: number | undefined;
                        max?: number | undefined;
                    } & {
                        min?: number | undefined;
                        max?: number | undefined;
                    } & { [K_9 in Exclude<keyof I["getBehaviorDetails"]["metadata"][number]["param2"][number]["range"], keyof BehaviorParameterValueDescriptionRange>]: never; }) | undefined;
                    hidUsage?: ({
                        keyboardMax?: number | undefined;
                        consumerMax?: number | undefined;
                    } & {
                        keyboardMax?: number | undefined;
                        consumerMax?: number | undefined;
                    } & { [K_10 in Exclude<keyof I["getBehaviorDetails"]["metadata"][number]["param2"][number]["hidUsage"], keyof BehaviorParameterHidUsage>]: never; }) | undefined;
                    layerId?: ({} & {} & { [K_11 in Exclude<keyof I["getBehaviorDetails"]["metadata"][number]["param2"][number]["layerId"], never>]: never; }) | undefined;
                } & { [K_12 in Exclude<keyof I["getBehaviorDetails"]["metadata"][number]["param2"][number], keyof BehaviorParameterValueDescription>]: never; })[] & { [K_13 in Exclude<keyof I["getBehaviorDetails"]["metadata"][number]["param2"], keyof {
                    name?: string | undefined;
                    nil?: {} | undefined;
                    constant?: number | undefined;
                    range?: {
                        min?: number | undefined;
                        max?: number | undefined;
                    } | undefined;
                    hidUsage?: {
                        keyboardMax?: number | undefined;
                        consumerMax?: number | undefined;
                    } | undefined;
                    layerId?: {} | undefined;
                }[]>]: never; }) | undefined;
            } & { [K_14 in Exclude<keyof I["getBehaviorDetails"]["metadata"][number], keyof BehaviorBindingParametersSet>]: never; })[] & { [K_15 in Exclude<keyof I["getBehaviorDetails"]["metadata"], keyof {
                param1?: {
                    name?: string | undefined;
                    nil?: {} | undefined;
                    constant?: number | undefined;
                    range?: {
                        min?: number | undefined;
                        max?: number | undefined;
                    } | undefined;
                    hidUsage?: {
                        keyboardMax?: number | undefined;
                        consumerMax?: number | undefined;
                    } | undefined;
                    layerId?: {} | undefined;
                }[] | undefined;
                param2?: {
                    name?: string | undefined;
                    nil?: {} | undefined;
                    constant?: number | undefined;
                    range?: {
                        min?: number | undefined;
                        max?: number | undefined;
                    } | undefined;
                    hidUsage?: {
                        keyboardMax?: number | undefined;
                        consumerMax?: number | undefined;
                    } | undefined;
                    layerId?: {} | undefined;
                }[] | undefined;
            }[]>]: never; }) | undefined;
        } & { [K_16 in Exclude<keyof I["getBehaviorDetails"], keyof GetBehaviorDetailsResponse>]: never; }) | undefined;
        getBehaviorSettings?: ({
            behaviorId?: number | undefined;
            settings?: {
                id?: number | undefined;
                name?: string | undefined;
                value?: number | undefined;
                defaultValue?: number | undefined;
                range?: {
                    min?: number | undefined;
                    max?: number | undefined;
                    unit?: string | undefined;
                } | undefined;
                options?: {
                    options?: string[] | undefined;
                } | undefined;
                toggle?: {} | undefined;
            }[] | undefined;
        } & {
            behaviorId?: number | undefined;
            settings?: ({
                id?: number | undefined;
                name?: string | undefined;
                value?: number | undefined;
                defaultValue?: number | undefined;
                range?: {
                    min?: number | undefined;
                    max?: number | undefined;
                    unit?: string | undefined;
                } | undefined;
                options?: {
                    options?: string[] | undefined;
                } | undefined;
                toggle?: {} | undefined;
            }[] & ({
                id?: number | undefined;
                name?: string | undefined;
                value?: number | undefined;
                defaultValue?: number | undefined;
                range?: {
                    min?: number | undefined;
                    max?: number | undefined;
                    unit?: string | undefined;
                } | undefined;
                options?: {
                    options?: string[] | undefined;
                } | undefined;
                toggle?: {} | undefined;
            } & {
                id?: number | undefined;
                name?: string | undefined;
                value?: number | undefined;
                defaultValue?: number | undefined;
                range?: ({
                    min?: number | undefined;
                    max?: number | undefined;
                    unit?: string | undefined;
                } & {
                    min?: number | undefined;
                    max?: number | undefined;
                    unit?: string | undefined;
                } & { [K_17 in Exclude<keyof I["getBehaviorSettings"]["settings"][number]["range"], keyof BehaviorSettingRange>]: never; }) | undefined;
                options?: ({
                    options?: string[] | undefined;
                } & {
                    options?: (string[] & string[] & { [K_18 in Exclude<keyof I["getBehaviorSettings"]["settings"][number]["options"]["options"], keyof string[]>]: never; }) | undefined;
                } & { [K_19 in Exclude<keyof I["getBehaviorSettings"]["settings"][number]["options"], "options">]: never; }) | undefined;
                toggle?: ({} & {} & { [K_20 in Exclude<keyof I["getBehaviorSettings"]["settings"][number]["toggle"], never>]: never; }) | undefined;
            } & { [K_21 in Exclude<keyof I["getBehaviorSettings"]["settings"][number], keyof BehaviorSetting>]: never; })[] & { [K_22 in Exclude<keyof I["getBehaviorSettings"]["settings"], keyof {
                id?: number | undefined;
                name?: string | undefined;
                value?: number | undefined;
                defaultValue?: number | undefined;
                range?: {
                    min?: number | undefined;
                    max?: number | undefined;
                    unit?: string | undefined;
                } | undefined;
                options?: {
                    options?: string[] | undefined;
                } | undefined;
                toggle?: {} | undefined;
            }[]>]: never; }) | undefined;
        } & { [K_23 in Exclude<keyof I["getBehaviorSettings"], keyof GetBehaviorSettingsResponse>]: never; }) | undefined;
        setBehaviorSetting?: SetBehaviorSettingResponse | undefined;
    } & { [K_24 in Exclude<keyof I, keyof Response>]: never; }>(base?: I | undefined): Response;
    fromPartial<I_1 extends {
        listAllBehaviors?: {
            behaviors?: number[] | undefined;
        } | undefined;
        getBehaviorDetails?: {
            id?: number | undefined;
            displayName?: string | undefined;
            metadata?: {
                param1?: {
                    name?: string | undefined;
                    nil?: {} | undefined;
                    constant?: number | undefined;
                    range?: {
                        min?: number | undefined;
                        max?: number | undefined;
                    } | undefined;
                    hidUsage?: {
                        keyboardMax?: number | undefined;
                        consumerMax?: number | undefined;
                    } | undefined;
                    layerId?: {} | undefined;
                }[] | undefined;
                param2?: {
                    name?: string | undefined;
                    nil?: {} | undefined;
                    constant?: number | undefined;
                    range?: {
                        min?: number | undefined;
                        max?: number | undefined;
                    } | undefined;
                    hidUsage?: {
                        keyboardMax?: number | undefined;
                        consumerMax?: number | undefined;
                    } | undefined;
                    layerId?: {} | undefined;
                }[] | undefined;
            }[] | undefined;
        } | undefined;
        getBehaviorSettings?: {
            behaviorId?: number | undefined;
            settings?: {
                id?: number | undefined;
                name?: string | undefined;
                value?: number | undefined;
                defaultValue?: number | undefined;
                range?: {
                    min?: number | undefined;
                    max?: number | undefined;
                    unit?: string | undefined;
                } | undefined;
                options?: {
                    options?: string[] | undefined;
                } | undefined;
                toggle?: {} | undefined;
            }[] | undefined;
        } | undefined;
        setBehaviorSetting?: SetBehaviorSettingResponse | undefined;
    } & {
        listAllBehaviors?: ({
            behaviors?: number[] | undefined;
        } & {
            behaviors?: (number[] & number[] & { [K_25 in Exclude<keyof I_1["listAllBehaviors"]["behaviors"], keyof number[]>]: never; }) | undefined;
        } & { [K_26 in Exclude<keyof I_1["listAllBehaviors"], "behaviors">]: never; }) | undefined;
        getBehaviorDetails?: ({
            id?: number | undefined;
            displayName?: string | undefined;
            metadata?: {
                param1?: {
                    name?: string | undefined;
                    nil?: {} | undefined;
                    constant?: number | undefined;
                    range?: {
                        min?: number | undefined;
                        max?: number | undefined;
                    } | undefined;
                    hidUsage?: {
                        keyboardMax?: number | undefined;
                        consumerMax?: number | undefined;
                    } | undefined;
                    layerId?: {} | undefined;
                }[] | undefined;
                param2?: {
                    name?: string | undefined;
                    nil?: {} | undefined;
                    constant?: number | undefined;
                    range?: {
                        min?: number | undefined;
                        max?: number | undefined;
                    } | undefined;
                    hidUsage?: {
                        keyboardMax?: number | undefined;
                        consumerMax?: number | undefined;
                    } | undefined;
                    layerId?: {} | undefined;
                }[] | undefined;
            }[] | undefined;
        } & {
            id?: number | undefined;
            displayName?: string | undefined;
            metadata?: ({
                param1?: {
                    name?: string | undefined;
                    nil?: {} | undefined;
                    constant?: number | undefined;
                    range?: {
                        min?: number | undefined;
                        max?: number | undefined;
                    } | undefined;
                    hidUsage?: {
                        keyboardMax?: number | undefined;
                        consumerMax?: number | undefined;
                    } | undefined;
                    layerId?: {} | undefined;
                }[] | undefined;
                param2?: {
                    name?: string | undefined;
                    nil?: {} | undefined;
                    constant?: number | undefined;
                    range?: {
                        min?: number | undefined;
                        max?: number | undefined;
                    } | undefined;
                    hidUsage?: {
                        keyboardMax?: number | undefined;
                        consumerMax?: number | undefined;
                    } | undefined;
                    layerId?: {} | undefined;
                }[] | undefined;
            }[] & ({
                param1?: {
                    name?: string | undefined;
                    nil?: {} | undefined;
                    constant?: number | undefined;
                    range?: {
                        min?: number | undefined;
                        max?: number | undefined;
                    } | undefined;
                    hidUsage?: {
                        keyboardMax?: number | undefined;
                        consumerMax?: number | undefined;
                    } | undefined;
                    layerId?: {} | undefined;
                }[] | undefined;
                param2?: {
                    name?: string | undefined;
                    nil?: {} | undefined;
                    constant?: number | undefined;
                    range?: {
                        min?: number | undefined;
                        max?: number | undefined;
                    } | undefined;
                    hidUsage?: {
                        keyboardMax?: number | undefined;
                        consumerMax?: number | undefined;
                    } | undefined;
                    layerId?: {} | undefined;
                }[] | undefined;
            } & {
                param1?: ({
                    name?: string | undefined;
                    nil?: {} | undefined;
                    constant?: number | undefined;
                    range?: {
                        min?: number | undefined;
                        max?: number | undefined;
                    } | undefined;
                    hidUsage?: {
                        keyboardMax?: number | undefined;
                        consumerMax?: number | undefined;
                    } | undefined;
                    layerId?: {} | undefined;
                }[] & ({
                    name?: string | undefined;
                    nil?: {} | undefined;
                    constant?: number | undefined;
                    range?: {
                        min?: number | undefined;
                        max?: number | undefined;
                    } | undefined;
                    hidUsage?: {
                        keyboardMax?: number | undefined;
                        consumerMax?: number | undefined;
                    } | undefined;
                    layerId?: {} | undefined;
                } & {
                    name?: string | undefined;
                    nil?: ({} & {} & { [K_27 in Exclude<keyof I_1["getBehaviorDetails"]["metadata"][number]["param1"][number]["nil"], never>]: never; }) | undefined;
                    constant?: number | undefined;
                    range?: ({
                        min?: number | undefined;
                        max?: number | undefined;
                    } & {
                        min?: number | undefined;
                        max?: number | undefined;
                    } & { [K_28 in Exclude<keyof I_1["getBehaviorDetails"]["metadata"][number]["param1"][number]["range"], keyof BehaviorParameterValueDescriptionRange>]: never; }) | undefined;
                    hidUsage?: ({
                        keyboardMax?: number | undefined;
                        consumerMax?: number | undefined;
                    } & {
                        keyboardMax?: number | undefined;
                        consumerMax?: number | undefined;
                    } & { [K_29 in Exclude<keyof I_1["getBehaviorDetails"]["metadata"][number]["param1"][number]["hidUsage"], keyof BehaviorParameterHidUsage>]: never; }) | undefined;
                    layerId?: ({} & {} & { [K_30 in Exclude<keyof I_1["getBehaviorDetails"]["metadata"][number]["param1"][number]["layerId"], never>]: never; }) | undefined;
                } & { [K_31 in Exclude<keyof I_1["getBehaviorDetails"]["metadata"][number]["param1"][number], keyof BehaviorParameterValueDescription>]: never; })[] & { [K_32 in Exclude<keyof I_1["getBehaviorDetails"]["metadata"][number]["param1"], keyof {
                    name?: string | undefined;
                    nil?: {} | undefined;
                    constant?: number | undefined;
                    range?: {
                        min?: number | undefined;
                        max?: number | undefined;
                    } | undefined;
                    hidUsage?: {
                        keyboardMax?: number | undefined;
                        consumerMax?: number | undefined;
                    } | undefined;
                    layerId?: {} | undefined;
                }[]>]: never; }) | undefined;
                param2?: ({
                    name?: string | undefined;
                    nil?: {} | undefined;
                    constant?: number | undefined;
                    range?: {
                        min?: number | undefined;
                        max?: number | undefined;
                    } | undefined;
                    hidUsage?: {
                        keyboardMax?: number | undefined;
                        consumerMax?: number | undefined;
                    } | undefined;
                    layerId?: {} | undefined;
                }[] & ({
                    name?: string | undefined;
                    nil?: {} | undefined;
                    constant?: number | undefined;
                    range?: {
                        min?: number | undefined;
                        max?: number | undefined;
                    } | undefined;
                    hidUsage?: {
                        keyboardMax?: number | undefined;
                        consumerMax?: number | undefined;
                    } | undefined;
                    layerId?: {} | undefined;
                } & {
                    name?: string | undefined;
                    nil?: ({} & {} & { [K_33 in Exclude<keyof I_1["getBehaviorDetails"]["metadata"][number]["param2"][number]["nil"], never>]: never; }) | undefined;
                    constant?: number | undefined;
                    range?: ({
                        min?: number | undefined;
                        max?: number | undefined;
                    } & {
                        min?: number | undefined;
                        max?: number | undefined;
                    } & { [K_34 in Exclude<keyof I_1["getBehaviorDetails"]["metadata"][number]["param2"][number]["range"], keyof BehaviorParameterValueDescriptionRange>]: never; }) | undefined;
                    hidUsage?: ({
                        keyboardMax?: number | undefined;
                        consumerMax?: number | undefined;
                    } & {
                        keyboardMax?: number | undefined;
                        consumerMax?: number | undefined;
                    } & { [K_35 in Exclude<keyof I_1["getBehaviorDetails"]["metadata"][number]["param2"][number]["hidUsage"], keyof BehaviorParameterHidUsage>]: never; }) | undefined;
                    layerId?: ({} & {} & { [K_36 in Exclude<keyof I_1["getBehaviorDetails"]["metadata"][number]["param2"][number]["layerId"], never>]: never; }) | undefined;
                } & { [K_37 in Exclude<keyof I_1["getBehaviorDetails"]["metadata"][number]["param2"][number], keyof BehaviorParameterValueDescription>]: never; })[] & { [K_38 in Exclude<keyof I_1["getBehaviorDetails"]["metadata"][number]["param2"], keyof {
                    name?: string | undefined;
                    nil?: {} | undefined;
                    constant?: number | undefined;
                    range?: {
                        min?: number | undefined;
                        max?: number | undefined;
                    } | undefined;
                    hidUsage?: {
                        keyboardMax?: number | undefined;
                        consumerMax?: number | undefined;
                    } | undefined;
                    layerId?: {} | undefined;
                }[]>]: never; }) | undefined;
            } & { [K_39 in Exclude<keyof I_1["getBehaviorDetails"]["metadata"][number], keyof BehaviorBindingParametersSet>]: never; })[] & { [K_40 in Exclude<keyof I_1["getBehaviorDetails"]["metadata"], keyof {
                param1?: {
                    name?: string | undefined;
                    nil?: {} | undefined;
                    constant?: number | undefined;
                    range?: {
                        min?: number | undefined;
                        max?: number | undefined;
                    } | undefined;
                    hidUsage?: {
                        keyboardMax?: number | undefined;
                        consumerMax?: number | undefined;
                    } | undefined;
                    layerId?: {} | undefined;
                }[] | undefined;
                param2?: {
                    name?: string | undefined;
                    nil?: {} | undefined;
                    constant?: number | undefined;
                    range?: {
                        min?: number | undefined;
                        max?: number | undefined;
                    } | undefined;
                    hidUsage?: {
                        keyboardMax?: number | undefined;
                        consumerMax?: number | undefined;
                    } | undefined;
                    layerId?: {} | undefined;
                }[] | undefined;
            }[]>]: never; }) | undefined;
        } & { [K_41 in Exclude<keyof I_1["getBehaviorDetails"], keyof GetBehaviorDetailsResponse>]: never; }) | undefined;
        getBehaviorSettings?: ({
            behaviorId?: number | undefined;
            settings?: {
                id?: number | undefined;
                name?: string | undefined;
                value?: number | undefined;
                defaultValue?: number | undefined;
                range?: {
                    min?: number | undefined;
                    max?: number | undefined;
                    unit?: string | undefined;
                } | undefined;
                options?: {
                    options?: string[] | undefined;
                } | undefined;
                toggle?: {} | undefined;
            }[] | undefined;
        } & {
            behaviorId?: number | undefined;
            settings?: ({
                id?: number | undefined;
                name?: string | undefined;
                value?: number | undefined;
                defaultValue?: number | undefined;
                range?: {
                    min?: number | undefined;
                    max?: number | undefined;
                    unit?: string | undefined;
                } | undefined;
                options?: {
                    options?: string[] | undefined;
                } | undefined;
                toggle?: {} | undefined;
            }[] & ({
                id?: number | undefined;
                name?: string | undefined;
                value?: number | undefined;
                defaultValue?: number | undefined;
                range?: {
                    min?: number | undefined;
                    max?: number | undefined;
                    unit?: string | undefined;
                } | undefined;
                options?: {
                    options?: string[] | undefined;
                } | undefined;
                toggle?: {} | undefined;
            } & {
                id?: number | undefined;
                name?: string | undefined;
                value?: number | undefined;
                defaultValue?: number | undefined;
                range?: ({
                    min?: number | undefined;
                    max?: number | undefined;
                    unit?: string | undefined;
                } & {
                    min?: number | undefined;
                    max?: number | undefined;
                    unit?: string | undefined;
                } & { [K_42 in Exclude<keyof I_1["getBehaviorSettings"]["settings"][number]["range"], keyof BehaviorSettingRange>]: never; }) | undefined;
                options?: ({
                    options?: string[] | undefined;
                } & {
                    options?: (string[] & string[] & { [K_43 in Exclude<keyof I_1["getBehaviorSettings"]["settings"][number]["options"]["options"], keyof string[]>]: never; }) | undefined;
                } & { [K_44 in Exclude<keyof I_1["getBehaviorSettings"]["settings"][number]["options"], "options">]: never; }) | undefined;
                toggle?: ({} & {} & { [K_45 in Exclude<keyof I_1["getBehaviorSettings"]["settings"][number]["toggle"], never>]: never; }) | undefined;
            } & { [K_46 in Exclude<keyof I_1["getBehaviorSettings"]["settings"][number], keyof BehaviorSetting>]: never; })[] & { [K_47 in Exclude<keyof I_1["getBehaviorSettings"]["settings"], keyof {
                id?: number | undefined;
                name?: string | undefined;
                value?: number | undefined;
                defaultValue?: number | undefined;
                range?: {
                    min?: number | undefined;
                    max?: number | undefined;
                    unit?: string | undefined;
                } | undefined;
                options?: {
                    options?: string[] | undefined;
                } | undefined;
                toggle?: {} | undefined;
            }[]>]: never; }) | undefined;
        } & { [K_48 in Exclude<keyof I_1["getBehaviorSettings"], keyof GetBehaviorSettingsResponse>]: never; }) | undefined;
        setBehaviorSetting?: SetBehaviorSettingResponse | undefined;
    } & { [K_49 in Exclude<keyof I_1, keyof Response>]: never; }>(object: I_1): Response;
};
export declare const ListAllBehaviorsResponse: {
    encode(message: ListAllBehaviorsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ListAllBehaviorsResponse;
    fromJSON(object: any): ListAllBehaviorsResponse;
    toJSON(message: ListAllBehaviorsResponse): unknown;
    create<I extends {
        behaviors?: number[] | undefined;
    } & {
        behaviors?: (number[] & number[] & { [K in Exclude<keyof I["behaviors"], keyof number[]>]: never; }) | undefined;
    } & { [K_1 in Exclude<keyof I, "behaviors">]: never; }>(base?: I | undefined): ListAllBehaviorsResponse;
    fromPartial<I_1 extends {
        behaviors?: number[] | undefined;
    } & {
        behaviors?: (number[] & number[] & { [K_2 in Exclude<keyof I_1["behaviors"], keyof number[]>]: never; }) | undefined;
    } & { [K_3 in Exclude<keyof I_1, "behaviors">]: never; }>(object: I_1): ListAllBehaviorsResponse;
};
export declare const GetBehaviorDetailsResponse: {
    encode(message: GetBehaviorDetailsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): GetBehaviorDetailsResponse;
    fromJSON(object: any): GetBehaviorDetailsResponse;
    toJSON(message: GetBehaviorDetailsResponse): unknown;
    create<I extends {
        id?: number | undefined;
        displayName?: string | undefined;
        metadata?: {
            param1?: {
                name?: string | undefined;
                nil?: {} | undefined;
                constant?: number | undefined;
                range?: {
                    min?: number | undefined;
                    max?: number | undefined;
                } | undefined;
                hidUsage?: {
                    keyboardMax?: number | undefined;
                    consumerMax?: number | undefined;
                } | undefined;
                layerId?: {} | undefined;
            }[] | undefined;
            param2?: {
                name?: string | undefined;
                nil?: {} | undefined;
                constant?: number | undefined;
                range?: {
                    min?: number | undefined;
                    max?: number | undefined;
                } | undefined;
                hidUsage?: {
                    keyboardMax?: number | undefined;
                    consumerMax?: number | undefined;
                } | undefined;
                layerId?: {} | undefined;
            }[] | undefined;
        }[] | undefined;
    } & {
        id?: number | undefined;
        displayName?: string | undefined;
        metadata?: ({
            param1?: {
                name?: string | undefined;
                nil?: {} | undefined;
                constant?: number | undefined;
                range?: {
                    min?: number | undefined;
                    max?: number | undefined;
                } | undefined;
                hidUsage?: {
                    keyboardMax?: number | undefined;
                    consumerMax?: number | undefined;
                } | undefined;
                layerId?: {} | undefined;
            }[] | undefined;
            param2?: {
                name?: string | undefined;
                nil?: {} | undefined;
                constant?: number | undefined;
                range?: {
                    min?: number | undefined;
                    max?: number | undefined;
                } | undefined;
                hidUsage?: {
                    keyboardMax?: number | undefined;
                    consumerMax?: number | undefined;
                } | undefined;
                layerId?: {} | undefined;
            }[] | undefined;
        }[] & ({
            param1?: {
                name?: string | undefined;
                nil?: {} | undefined;
                constant?: number | undefined;
                range?: {
                    min?: number | undefined;
                    max?: number | undefined;
                } | undefined;
                hidUsage?: {
                    keyboardMax?: number | undefined;
                    consumerMax?: number | undefined;
                } | undefined;
                layerId?: {} | undefined;
            }[] | undefined;
            param2?: {
                name?: string | undefined;
                nil?: {} | undefined;
                constant?: number | undefined;
                range?: {
                    min?: number | undefined;
                    max?: number | undefined;
                } | undefined;
                hidUsage?: {
                    keyboardMax?: number | undefined;
                    consumerMax?: number | undefined;
                } | undefined;
                layerId?: {} | undefined;
            }[] | undefined;
        } & {
            param1?: ({
                name?: string | undefined;
                nil?: {} | undefined;
                constant?: number | undefined;
                range?: {
                    min?: number | undefined;
                    max?: number | undefined;
                } | undefined;
                hidUsage?: {
                    keyboardMax?: number | undefined;
                    consumerMax?: number | undefined;
                } | undefined;
                layerId?: {} | undefined;
            }[] & ({
                name?: string | undefined;
                nil?: {} | undefined;
                constant?: number | undefined;
                range?: {
                    min?: number | undefined;
                    max?: number | undefined;
                } | undefined;
                hidUsage?: {
                    keyboardMax?: number | undefined;
                    consumerMax?: number | undefined;
                } | undefined;
                layerId?: {} | undefined;
            } & {
                name?: string | undefined;
                nil?: ({} & {} & { [K in Exclude<keyof I["metadata"][number]["param1"][number]["nil"], never>]: never; }) | undefined;
                constant?: number | undefined;
                range?: ({
                    min?: number | undefined;
                    max?: number | undefined;
                } & {
                    min?: number | undefined;
                    max?: number | undefined;
                } & { [K_1 in Exclude<keyof I["metadata"][number]["param1"][number]["range"], keyof BehaviorParameterValueDescriptionRange>]: never; }) | undefined;
                hidUsage?: ({
                    keyboardMax?: number | undefined;
                    consumerMax?: number | undefined;
                } & {
                    keyboardMax?: number | undefined;
                    consumerMax?: number | undefined;
                } & { [K_2 in Exclude<keyof I["metadata"][number]["param1"][number]["hidUsage"], keyof BehaviorParameterHidUsage>]: never; }) | undefined;
                layerId?: ({} & {} & { [K_3 in Exclude<keyof I["metadata"][number]["param1"][number]["layerId"], never>]: never; }) | undefined;
            } & { [K_4 in Exclude<keyof I["metadata"][number]["param1"][number], keyof BehaviorParameterValueDescription>]: never; })[] & { [K_5 in Exclude<keyof I["metadata"][number]["param1"], keyof {
                name?: string | undefined;
                nil?: {} | undefined;
                constant?: number | undefined;
                range?: {
                    min?: number | undefined;
                    max?: number | undefined;
                } | undefined;
                hidUsage?: {
                    keyboardMax?: number | undefined;
                    consumerMax?: number | undefined;
                } | undefined;
                layerId?: {} | undefined;
            }[]>]: never; }) | undefined;
            param2?: ({
                name?: string | undefined;
                nil?: {} | undefined;
                constant?: number | undefined;
                range?: {
                    min?: number | undefined;
                    max?: number | undefined;
                } | undefined;
                hidUsage?: {
                    keyboardMax?: number | undefined;
                    consumerMax?: number | undefined;
                } | undefined;
                layerId?: {} | undefined;
            }[] & ({
                name?: string | undefined;
                nil?: {} | undefined;
                constant?: number | undefined;
                range?: {
                    min?: number | undefined;
                    max?: number | undefined;
                } | undefined;
                hidUsage?: {
                    keyboardMax?: number | undefined;
                    consumerMax?: number | undefined;
                } | undefined;
                layerId?: {} | undefined;
            } & {
                name?: string | undefined;
                nil?: ({} & {} & { [K_6 in Exclude<keyof I["metadata"][number]["param2"][number]["nil"], never>]: never; }) | undefined;
                constant?: number | undefined;
                range?: ({
                    min?: number | undefined;
                    max?: number | undefined;
                } & {
                    min?: number | undefined;
                    max?: number | undefined;
                } & { [K_7 in Exclude<keyof I["metadata"][number]["param2"][number]["range"], keyof BehaviorParameterValueDescriptionRange>]: never; }) | undefined;
                hidUsage?: ({
                    keyboardMax?: number | undefined;
                    consumerMax?: number | undefined;
                } & {
                    keyboardMax?: number | undefined;
                    consumerMax?: number | undefined;
                } & { [K_8 in Exclude<keyof I["metadata"][number]["param2"][number]["hidUsage"], keyof BehaviorParameterHidUsage>]: never; }) | undefined;
                layerId?: ({} & {} & { [K_9 in Exclude<keyof I["metadata"][number]["param2"][number]["layerId"], never>]: never; }) | undefined;
            } & { [K_10 in Exclude<keyof I["metadata"][number]["param2"][number], keyof BehaviorParameterValueDescription>]: never; })[] & { [K_11 in Exclude<keyof I["metadata"][number]["param2"], keyof {
                name?: string | undefined;
                nil?: {} | undefined;
                constant?: number | undefined;
                range?: {
                    min?: number | undefined;
                    max?: number | undefined;
                } | undefined;
                hidUsage?: {
                    keyboardMax?: number | undefined;
                    consumerMax?: number | undefined;
                } | undefined;
                layerId?: {} | undefined;
            }[]>]: never; }) | undefined;
        } & { [K_12 in Exclude<keyof I["metadata"][number], keyof BehaviorBindingParametersSet>]: never; })[] & { [K_13 in Exclude<keyof I["metadata"], keyof {
            param1?: {
                name?: string | undefined;
                nil?: {} | undefined;
                constant?: number | undefined;
                range?: {
                    min?: number | undefined;
                    max?: number | undefined;
                } | undefined;
                hidUsage?: {
                    keyboardMax?: number | undefined;
                    consumerMax?: number | undefined;
                } | undefined;
                layerId?: {} | undefined;
            }[] | undefined;
            param2?: {
                name?: string | undefined;
                nil?: {} | undefined;
                constant?: number | undefined;
                range?: {
                    min?: number | undefined;
                    max?: number | undefined;
                } | undefined;
                hidUsage?: {
                    keyboardMax?: number | undefined;
                    consumerMax?: number | undefined;
                } | undefined;
                layerId?: {} | undefined;
            }[] | undefined;
        }[]>]: never; }) | undefined;
    } & { [K_14 in Exclude<keyof I, keyof GetBehaviorDetailsResponse>]: never; }>(base?: I | undefined): GetBehaviorDetailsResponse;
    fromPartial<I_1 extends {
        id?: number | undefined;
        displayName?: string | undefined;
        metadata?: {
            param1?: {
                name?: string | undefined;
                nil?: {} | undefined;
                constant?: number | undefined;
                range?: {
                    min?: number | undefined;
                    max?: number | undefined;
                } | undefined;
                hidUsage?: {
                    keyboardMax?: number | undefined;
                    consumerMax?: number | undefined;
                } | undefined;
                layerId?: {} | undefined;
            }[] | undefined;
            param2?: {
                name?: string | undefined;
                nil?: {} | undefined;
                constant?: number | undefined;
                range?: {
                    min?: number | undefined;
                    max?: number | undefined;
                } | undefined;
                hidUsage?: {
                    keyboardMax?: number | undefined;
                    consumerMax?: number | undefined;
                } | undefined;
                layerId?: {} | undefined;
            }[] | undefined;
        }[] | undefined;
    } & {
        id?: number | undefined;
        displayName?: string | undefined;
        metadata?: ({
            param1?: {
                name?: string | undefined;
                nil?: {} | undefined;
                constant?: number | undefined;
                range?: {
                    min?: number | undefined;
                    max?: number | undefined;
                } | undefined;
                hidUsage?: {
                    keyboardMax?: number | undefined;
                    consumerMax?: number | undefined;
                } | undefined;
                layerId?: {} | undefined;
            }[] | undefined;
            param2?: {
                name?: string | undefined;
                nil?: {} | undefined;
                constant?: number | undefined;
                range?: {
                    min?: number | undefined;
                    max?: number | undefined;
                } | undefined;
                hidUsage?: {
                    keyboardMax?: number | undefined;
                    consumerMax?: number | undefined;
                } | undefined;
                layerId?: {} | undefined;
            }[] | undefined;
        }[] & ({
            param1?: {
                name?: string | undefined;
                nil?: {} | undefined;
                constant?: number | undefined;
                range?: {
                    min?: number | undefined;
                    max?: number | undefined;
                } | undefined;
                hidUsage?: {
                    keyboardMax?: number | undefined;
                    consumerMax?: number | undefined;
                } | undefined;
                layerId?: {} | undefined;
            }[] | undefined;
            param2?: {
                name?: string | undefined;
                nil?: {} | undefined;
                constant?: number | undefined;
                range?: {
                    min?: number | undefined;
                    max?: number | undefined;
                } | undefined;
                hidUsage?: {
                    keyboardMax?: number | undefined;
                    consumerMax?: number | undefined;
                } | undefined;
                layerId?: {} | undefined;
            }[] | undefined;
        } & {
            param1?: ({
                name?: string | undefined;
                nil?: {} | undefined;
                constant?: number | undefined;
                range?: {
                    min?: number | undefined;
                    max?: number | undefined;
                } | undefined;
                hidUsage?: {
                    keyboardMax?: number | undefined;
                    consumerMax?: number | undefined;
                } | undefined;
                layerId?: {} | undefined;
            }[] & ({
                name?: string | undefined;
                nil?: {} | undefined;
                constant?: number | undefined;
                range?: {
                    min?: number | undefined;
                    max?: number | undefined;
                } | undefined;
                hidUsage?: {
                    keyboardMax?: number | undefined;
                    consumerMax?: number | undefined;
                } | undefined;
                layerId?: {} | undefined;
            } & {
                name?: string | undefined;
                nil?: ({} & {} & { [K_15 in Exclude<keyof I_1["metadata"][number]["param1"][number]["nil"], never>]: never; }) | undefined;
                constant?: number | undefined;
                range?: ({
                    min?: number | undefined;
                    max?: number | undefined;
                } & {
                    min?: number | undefined;
                    max?: number | undefined;
                } & { [K_16 in Exclude<keyof I_1["metadata"][number]["param1"][number]["range"], keyof BehaviorParameterValueDescriptionRange>]: never; }) | undefined;
                hidUsage?: ({
                    keyboardMax?: number | undefined;
                    consumerMax?: number | undefined;
                } & {
                    keyboardMax?: number | undefined;
                    consumerMax?: number | undefined;
                } & { [K_17 in Exclude<keyof I_1["metadata"][number]["param1"][number]["hidUsage"], keyof BehaviorParameterHidUsage>]: never; }) | undefined;
                layerId?: ({} & {} & { [K_18 in Exclude<keyof I_1["metadata"][number]["param1"][number]["layerId"], never>]: never; }) | undefined;
            } & { [K_19 in Exclude<keyof I_1["metadata"][number]["param1"][number], keyof BehaviorParameterValueDescription>]: never; })[] & { [K_20 in Exclude<keyof I_1["metadata"][number]["param1"], keyof {
                name?: string | undefined;
                nil?: {} | undefined;
                constant?: number | undefined;
                range?: {
                    min?: number | undefined;
                    max?: number | undefined;
                } | undefined;
                hidUsage?: {
                    keyboardMax?: number | undefined;
                    consumerMax?: number | undefined;
                } | undefined;
                layerId?: {} | undefined;
            }[]>]: never; }) | undefined;
            param2?: ({
                name?: string | undefined;
                nil?: {} | undefined;
                constant?: number | undefined;
                range?: {
                    min?: number | undefined;
                    max?: number | undefined;
                } | undefined;
                hidUsage?: {
                    keyboardMax?: number | undefined;
                    consumerMax?: number | undefined;
                } | undefined;
                layerId?: {} | undefined;
            }[] & ({
                name?: string | undefined;
                nil?: {} | undefined;
                constant?: number | undefined;
                range?: {
                    min?: number | undefined;
                    max?: number | undefined;
                } | undefined;
                hidUsage?: {
                    keyboardMax?: number | undefined;
                    consumerMax?: number | undefined;
                } | undefined;
                layerId?: {} | undefined;
            } & {
                name?: string | undefined;
                nil?: ({} & {} & { [K_21 in Exclude<keyof I_1["metadata"][number]["param2"][number]["nil"], never>]: never; }) | undefined;
                constant?: number | undefined;
                range?: ({
                    min?: number | undefined;
                    max?: number | undefined;
                } & {
                    min?: number | undefined;
                    max?: number | undefined;
                } & { [K_22 in Exclude<keyof I_1["metadata"][number]["param2"][number]["range"], keyof BehaviorParameterValueDescriptionRange>]: never; }) | undefined;
                hidUsage?: ({
                    keyboardMax?: number | undefined;
                    consumerMax?: number | undefined;
                } & {
                    keyboardMax?: number | undefined;
                    consumerMax?: number | undefined;
                } & { [K_23 in Exclude<keyof I_1["metadata"][number]["param2"][number]["hidUsage"], keyof BehaviorParameterHidUsage>]: never; }) | undefined;
                layerId?: ({} & {} & { [K_24 in Exclude<keyof I_1["metadata"][number]["param2"][number]["layerId"], never>]: never; }) | undefined;
            } & { [K_25 in Exclude<keyof I_1["metadata"][number]["param2"][number], keyof BehaviorParameterValueDescription>]: never; })[] & { [K_26 in Exclude<keyof I_1["metadata"][number]["param2"], keyof {
                name?: string | undefined;
                nil?: {} | undefined;
                constant?: number | undefined;
                range?: {
                    min?: number | undefined;
                    max?: number | undefined;
                } | undefined;
                hidUsage?: {
                    keyboardMax?: number | undefined;
                    consumerMax?: number | undefined;
                } | undefined;
                layerId?: {} | undefined;
            }[]>]: never; }) | undefined;
        } & { [K_27 in Exclude<keyof I_1["metadata"][number], keyof BehaviorBindingParametersSet>]: never; })[] & { [K_28 in Exclude<keyof I_1["metadata"], keyof {
            param1?: {
                name?: string | undefined;
                nil?: {} | undefined;
                constant?: number | undefined;
                range?: {
                    min?: number | undefined;
                    max?: number | undefined;
                } | undefined;
                hidUsage?: {
                    keyboardMax?: number | undefined;
                    consumerMax?: number | undefined;
                } | undefined;
                layerId?: {} | undefined;
            }[] | undefined;
            param2?: {
                name?: string | undefined;
                nil?: {} | undefined;
                constant?: number | undefined;
                range?: {
                    min?: number | undefined;
                    max?: number | undefined;
                } | undefined;
                hidUsage?: {
                    keyboardMax?: number | undefined;
                    consumerMax?: number | undefined;
                } | undefined;
                layerId?: {} | undefined;
            }[] | undefined;
        }[]>]: never; }) | undefined;
    } & { [K_29 in Exclude<keyof I_1, keyof GetBehaviorDetailsResponse>]: never; }>(object: I_1): GetBehaviorDetailsResponse;
};
export declare const BehaviorBindingParametersSet: {
    encode(message: BehaviorBindingParametersSet, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): BehaviorBindingParametersSet;
    fromJSON(object: any): BehaviorBindingParametersSet;
    toJSON(message: BehaviorBindingParametersSet): unknown;
    create<I extends {
        param1?: {
            name?: string | undefined;
            nil?: {} | undefined;
            constant?: number | undefined;
            range?: {
                min?: number | undefined;
                max?: number | undefined;
            } | undefined;
            hidUsage?: {
                keyboardMax?: number | undefined;
                consumerMax?: number | undefined;
            } | undefined;
            layerId?: {} | undefined;
        }[] | undefined;
        param2?: {
            name?: string | undefined;
            nil?: {} | undefined;
            constant?: number | undefined;
            range?: {
                min?: number | undefined;
                max?: number | undefined;
            } | undefined;
            hidUsage?: {
                keyboardMax?: number | undefined;
                consumerMax?: number | undefined;
            } | undefined;
            layerId?: {} | undefined;
        }[] | undefined;
    } & {
        param1?: ({
            name?: string | undefined;
            nil?: {} | undefined;
            constant?: number | undefined;
            range?: {
                min?: number | undefined;
                max?: number | undefined;
            } | undefined;
            hidUsage?: {
                keyboardMax?: number | undefined;
                consumerMax?: number | undefined;
            } | undefined;
            layerId?: {} | undefined;
        }[] & ({
            name?: string | undefined;
            nil?: {} | undefined;
            constant?: number | undefined;
            range?: {
                min?: number | undefined;
                max?: number | undefined;
            } | undefined;
            hidUsage?: {
                keyboardMax?: number | undefined;
                consumerMax?: number | undefined;
            } | undefined;
            layerId?: {} | undefined;
        } & {
            name?: string | undefined;
            nil?: ({} & {} & { [K in Exclude<keyof I["param1"][number]["nil"], never>]: never; }) | undefined;
            constant?: number | undefined;
            range?: ({
                min?: number | undefined;
                max?: number | undefined;
            } & {
                min?: number | undefined;
                max?: number | undefined;
            } & { [K_1 in Exclude<keyof I["param1"][number]["range"], keyof BehaviorParameterValueDescriptionRange>]: never; }) | undefined;
            hidUsage?: ({
                keyboardMax?: number | undefined;
                consumerMax?: number | undefined;
            } & {
                keyboardMax?: number | undefined;
                consumerMax?: number | undefined;
            } & { [K_2 in Exclude<keyof I["param1"][number]["hidUsage"], keyof BehaviorParameterHidUsage>]: never; }) | undefined;
            layerId?: ({} & {} & { [K_3 in Exclude<keyof I["param1"][number]["layerId"], never>]: never; }) | undefined;
        } & { [K_4 in Exclude<keyof I["param1"][number], keyof BehaviorParameterValueDescription>]: never; })[] & { [K_5 in Exclude<keyof I["param1"], keyof {
            name?: string | undefined;
            nil?: {} | undefined;
            constant?: number | undefined;
            range?: {
                min?: number | undefined;
                max?: number | undefined;
            } | undefined;
            hidUsage?: {
                keyboardMax?: number | undefined;
                consumerMax?: number | undefined;
            } | undefined;
            layerId?: {} | undefined;
        }[]>]: never; }) | undefined;
        param2?: ({
            name?: string | undefined;
            nil?: {} | undefined;
            constant?: number | undefined;
            range?: {
                min?: number | undefined;
                max?: number | undefined;
            } | undefined;
            hidUsage?: {
                keyboardMax?: number | undefined;
                consumerMax?: number | undefined;
            } | undefined;
            layerId?: {} | undefined;
        }[] & ({
            name?: string | undefined;
            nil?: {} | undefined;
            constant?: number | undefined;
            range?: {
                min?: number | undefined;
                max?: number | undefined;
            } | undefined;
            hidUsage?: {
                keyboardMax?: number | undefined;
                consumerMax?: number | undefined;
            } | undefined;
            layerId?: {} | undefined;
        } & {
            name?: string | undefined;
            nil?: ({} & {} & { [K_6 in Exclude<keyof I["param2"][number]["nil"], never>]: never; }) | undefined;
            constant?: number | undefined;
            range?: ({
                min?: number | undefined;
                max?: number | undefined;
            } & {
                min?: number | undefined;
                max?: number | undefined;
            } & { [K_7 in Exclude<keyof I["param2"][number]["range"], keyof BehaviorParameterValueDescriptionRange>]: never; }) | undefined;
            hidUsage?: ({
                keyboardMax?: number | undefined;
                consumerMax?: number | undefined;
            } & {
                keyboardMax?: number | undefined;
                consumerMax?: number | undefined;
            } & { [K_8 in Exclude<keyof I["param2"][number]["hidUsage"], keyof BehaviorParameterHidUsage>]: never; }) | undefined;
            layerId?: ({} & {} & { [K_9 in Exclude<keyof I["param2"][number]["layerId"], never>]: never; }) | undefined;
        } & { [K_10 in Exclude<keyof I["param2"][number], keyof BehaviorParameterValueDescription>]: never; })[] & { [K_11 in Exclude<keyof I["param2"], keyof {
            name?: string | undefined;
            nil?: {} | undefined;
            constant?: number | undefined;
            range?: {
                min?: number | undefined;
                max?: number | undefined;
            } | undefined;
            hidUsage?: {
                keyboardMax?: number | undefined;
                consumerMax?: number | undefined;
            } | undefined;
            layerId?: {} | undefined;
        }[]>]: never; }) | undefined;
    } & { [K_12 in Exclude<keyof I, keyof BehaviorBindingParametersSet>]: never; }>(base?: I | undefined): BehaviorBindingParametersSet;
    fromPartial<I_1 extends {
        param1?: {
            name?: string | undefined;
            nil?: {} | undefined;
            constant?: number | undefined;
            range?: {
                min?: number | undefined;
                max?: number | undefined;
            } | undefined;
            hidUsage?: {
                keyboardMax?: number | undefined;
                consumerMax?: number | undefined;
            } | undefined;
            layerId?: {} | undefined;
        }[] | undefined;
        param2?: {
            name?: string | undefined;
            nil?: {} | undefined;
            constant?: number | undefined;
            range?: {
                min?: number | undefined;
                max?: number | undefined;
            } | undefined;
            hidUsage?: {
                keyboardMax?: number | undefined;
                consumerMax?: number | undefined;
            } | undefined;
            layerId?: {} | undefined;
        }[] | undefined;
    } & {
        param1?: ({
            name?: string | undefined;
            nil?: {} | undefined;
            constant?: number | undefined;
            range?: {
                min?: number | undefined;
                max?: number | undefined;
            } | undefined;
            hidUsage?: {
                keyboardMax?: number | undefined;
                consumerMax?: number | undefined;
            } | undefined;
            layerId?: {} | undefined;
        }[] & ({
            name?: string | undefined;
            nil?: {} | undefined;
            constant?: number | undefined;
            range?: {
                min?: number | undefined;
                max?: number | undefined;
            } | undefined;
            hidUsage?: {
                keyboardMax?: number | undefined;
                consumerMax?: number | undefined;
            } | undefined;
            layerId?: {} | undefined;
        } & {
            name?: string | undefined;
            nil?: ({} & {} & { [K_13 in Exclude<keyof I_1["param1"][number]["nil"], never>]: never; }) | undefined;
            constant?: number | undefined;
            range?: ({
                min?: number | undefined;
                max?: number | undefined;
            } & {
                min?: number | undefined;
                max?: number | undefined;
            } & { [K_14 in Exclude<keyof I_1["param1"][number]["range"], keyof BehaviorParameterValueDescriptionRange>]: never; }) | undefined;
            hidUsage?: ({
                keyboardMax?: number | undefined;
                consumerMax?: number | undefined;
            } & {
                keyboardMax?: number | undefined;
                consumerMax?: number | undefined;
            } & { [K_15 in Exclude<keyof I_1["param1"][number]["hidUsage"], keyof BehaviorParameterHidUsage>]: never; }) | undefined;
            layerId?: ({} & {} & { [K_16 in Exclude<keyof I_1["param1"][number]["layerId"], never>]: never; }) | undefined;
        } & { [K_17 in Exclude<keyof I_1["param1"][number], keyof BehaviorParameterValueDescription>]: never; })[] & { [K_18 in Exclude<keyof I_1["param1"], keyof {
            name?: string | undefined;
            nil?: {} | undefined;
            constant?: number | undefined;
            range?: {
                min?: number | undefined;
                max?: number | undefined;
            } | undefined;
            hidUsage?: {
                keyboardMax?: number | undefined;
                consumerMax?: number | undefined;
            } | undefined;
            layerId?: {} | undefined;
        }[]>]: never; }) | undefined;
        param2?: ({
            name?: string | undefined;
            nil?: {} | undefined;
            constant?: number | undefined;
            range?: {
                min?: number | undefined;
                max?: number | undefined;
            } | undefined;
            hidUsage?: {
                keyboardMax?: number | undefined;
                consumerMax?: number | undefined;
            } | undefined;
            layerId?: {} | undefined;
        }[] & ({
            name?: string | undefined;
            nil?: {} | undefined;
            constant?: number | undefined;
            range?: {
                min?: number | undefined;
                max?: number | undefined;
            } | undefined;
            hidUsage?: {
                keyboardMax?: number | undefined;
                consumerMax?: number | undefined;
            } | undefined;
            layerId?: {} | undefined;
        } & {
            name?: string | undefined;
            nil?: ({} & {} & { [K_19 in Exclude<keyof I_1["param2"][number]["nil"], never>]: never; }) | undefined;
            constant?: number | undefined;
            range?: ({
                min?: number | undefined;
                max?: number | undefined;
            } & {
                min?: number | undefined;
                max?: number | undefined;
            } & { [K_20 in Exclude<keyof I_1["param2"][number]["range"], keyof BehaviorParameterValueDescriptionRange>]: never; }) | undefined;
            hidUsage?: ({
                keyboardMax?: number | undefined;
                consumerMax?: number | undefined;
            } & {
                keyboardMax?: number | undefined;
                consumerMax?: number | undefined;
            } & { [K_21 in Exclude<keyof I_1["param2"][number]["hidUsage"], keyof BehaviorParameterHidUsage>]: never; }) | undefined;
            layerId?: ({} & {} & { [K_22 in Exclude<keyof I_1["param2"][number]["layerId"], never>]: never; }) | undefined;
        } & { [K_23 in Exclude<keyof I_1["param2"][number], keyof BehaviorParameterValueDescription>]: never; })[] & { [K_24 in Exclude<keyof I_1["param2"], keyof {
            name?: string | undefined;
            nil?: {} | undefined;
            constant?: number | undefined;
            range?: {
                min?: number | undefined;
                max?: number | undefined;
            } | undefined;
            hidUsage?: {
                keyboardMax?: number | undefined;
                consumerMax?: number | undefined;
            } | undefined;
            layerId?: {} | undefined;
        }[]>]: never; }) | undefined;
    } & { [K_25 in Exclude<keyof I_1, keyof BehaviorBindingParametersSet>]: never; }>(object: I_1): BehaviorBindingParametersSet;
};
export declare const BehaviorParameterValueDescriptionRange: {
    encode(message: BehaviorParameterValueDescriptionRange, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): BehaviorParameterValueDescriptionRange;
    fromJSON(object: any): BehaviorParameterValueDescriptionRange;
    toJSON(message: BehaviorParameterValueDescriptionRange): unknown;
    create<I extends {
        min?: number | undefined;
        max?: number | undefined;
    } & {
        min?: number | undefined;
        max?: number | undefined;
    } & { [K in Exclude<keyof I, keyof BehaviorParameterValueDescriptionRange>]: never; }>(base?: I | undefined): BehaviorParameterValueDescriptionRange;
    fromPartial<I_1 extends {
        min?: number | undefined;
        max?: number | undefined;
    } & {
        min?: number | undefined;
        max?: number | undefined;
    } & { [K_1 in Exclude<keyof I_1, keyof BehaviorParameterValueDescriptionRange>]: never; }>(object: I_1): BehaviorParameterValueDescriptionRange;
};
export declare const BehaviorParameterNil: {
    encode(_: BehaviorParameterNil, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): BehaviorParameterNil;
    fromJSON(_: any): BehaviorParameterNil;
    toJSON(_: BehaviorParameterNil): unknown;
    create<I extends {} & {} & { [K in Exclude<keyof I, never>]: never; }>(base?: I | undefined): BehaviorParameterNil;
    fromPartial<I_1 extends {} & {} & { [K_1 in Exclude<keyof I_1, never>]: never; }>(_: I_1): BehaviorParameterNil;
};
export declare const BehaviorParameterLayerId: {
    encode(_: BehaviorParameterLayerId, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): BehaviorParameterLayerId;
    fromJSON(_: any): BehaviorParameterLayerId;
    toJSON(_: BehaviorParameterLayerId): unknown;
    create<I extends {} & {} & { [K in Exclude<keyof I, never>]: never; }>(base?: I | undefined): BehaviorParameterLayerId;
    fromPartial<I_1 extends {} & {} & { [K_1 in Exclude<keyof I_1, never>]: never; }>(_: I_1): BehaviorParameterLayerId;
};
export declare const BehaviorParameterHidUsage: {
    encode(message: BehaviorParameterHidUsage, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): BehaviorParameterHidUsage;
    fromJSON(object: any): BehaviorParameterHidUsage;
    toJSON(message: BehaviorParameterHidUsage): unknown;
    create<I extends {
        keyboardMax?: number | undefined;
        consumerMax?: number | undefined;
    } & {
        keyboardMax?: number | undefined;
        consumerMax?: number | undefined;
    } & { [K in Exclude<keyof I, keyof BehaviorParameterHidUsage>]: never; }>(base?: I | undefined): BehaviorParameterHidUsage;
    fromPartial<I_1 extends {
        keyboardMax?: number | undefined;
        consumerMax?: number | undefined;
    } & {
        keyboardMax?: number | undefined;
        consumerMax?: number | undefined;
    } & { [K_1 in Exclude<keyof I_1, keyof BehaviorParameterHidUsage>]: never; }>(object: I_1): BehaviorParameterHidUsage;
};
export declare const BehaviorParameterValueDescription: {
    encode(message: BehaviorParameterValueDescription, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): BehaviorParameterValueDescription;
    fromJSON(object: any): BehaviorParameterValueDescription;
    toJSON(message: BehaviorParameterValueDescription): unknown;
    create<I extends {
        name?: string | undefined;
        nil?: {} | undefined;
        constant?: number | undefined;
        range?: {
            min?: number | undefined;
            max?: number | undefined;
        } | undefined;
        hidUsage?: {
            keyboardMax?: number | undefined;
            consumerMax?: number | undefined;
        } | undefined;
        layerId?: {} | undefined;
    } & {
        name?: string | undefined;
        nil?: ({} & {} & { [K in Exclude<keyof I["nil"], never>]: never; }) | undefined;
        constant?: number | undefined;
        range?: ({
            min?: number | undefined;
            max?: number | undefined;
        } & {
            min?: number | undefined;
            max?: number | undefined;
        } & { [K_1 in Exclude<keyof I["range"], keyof BehaviorParameterValueDescriptionRange>]: never; }) | undefined;
        hidUsage?: ({
            keyboardMax?: number | undefined;
            consumerMax?: number | undefined;
        } & {
            keyboardMax?: number | undefined;
            consumerMax?: number | undefined;
        } & { [K_2 in Exclude<keyof I["hidUsage"], keyof BehaviorParameterHidUsage>]: never; }) | undefined;
        layerId?: ({} & {} & { [K_3 in Exclude<keyof I["layerId"], never>]: never; }) | undefined;
    } & { [K_4 in Exclude<keyof I, keyof BehaviorParameterValueDescription>]: never; }>(base?: I | undefined): BehaviorParameterValueDescription;
    fromPartial<I_1 extends {
        name?: string | undefined;
        nil?: {} | undefined;
        constant?: number | undefined;
        range?: {
            min?: number | undefined;
            max?: number | undefined;
        } | undefined;
        hidUsage?: {
            keyboardMax?: number | undefined;
            consumerMax?: number | undefined;
        } | undefined;
        layerId?: {} | undefined;
    } & {
        name?: string | undefined;
        nil?: ({} & {} & { [K_5 in Exclude<keyof I_1["nil"], never>]: never; }) | undefined;
        constant?: number | undefined;
        range?: ({
            min?: number | undefined;
            max?: number | undefined;
        } & {
            min?: number | undefined;
            max?: number | undefined;
        } & { [K_6 in Exclude<keyof I_1["range"], keyof BehaviorParameterValueDescriptionRange>]: never; }) | undefined;
        hidUsage?: ({
            keyboardMax?: number | undefined;
            consumerMax?: number | undefined;
        } & {
            keyboardMax?: number | undefined;
            consumerMax?: number | undefined;
        } & { [K_7 in Exclude<keyof I_1["hidUsage"], keyof BehaviorParameterHidUsage>]: never; }) | undefined;
        layerId?: ({} & {} & { [K_8 in Exclude<keyof I_1["layerId"], never>]: never; }) | undefined;
    } & { [K_9 in Exclude<keyof I_1, keyof BehaviorParameterValueDescription>]: never; }>(object: I_1): BehaviorParameterValueDescription;
};
export declare const GetBehaviorSettingsRequest: {
    encode(message: GetBehaviorSettingsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): GetBehaviorSettingsRequest;
    fromJSON(object: any): GetBehaviorSettingsRequest;
    toJSON(message: GetBehaviorSettingsRequest): unknown;
    create<I extends {
        behaviorId?: number | undefined;
    } & {
        behaviorId?: number | undefined;
    } & { [K in Exclude<keyof I, "behaviorId">]: never; }>(base?: I | undefined): GetBehaviorSettingsRequest;
    fromPartial<I_1 extends {
        behaviorId?: number | undefined;
    } & {
        behaviorId?: number | undefined;
    } & { [K_1 in Exclude<keyof I_1, "behaviorId">]: never; }>(object: I_1): GetBehaviorSettingsRequest;
};
export declare const GetBehaviorSettingsResponse: {
    encode(message: GetBehaviorSettingsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): GetBehaviorSettingsResponse;
    fromJSON(object: any): GetBehaviorSettingsResponse;
    toJSON(message: GetBehaviorSettingsResponse): unknown;
    create<I extends {
        behaviorId?: number | undefined;
        settings?: {
            id?: number | undefined;
            name?: string | undefined;
            value?: number | undefined;
            defaultValue?: number | undefined;
            range?: {
                min?: number | undefined;
                max?: number | undefined;
                unit?: string | undefined;
            } | undefined;
            options?: {
                options?: string[] | undefined;
            } | undefined;
            toggle?: {} | undefined;
        }[] | undefined;
    } & {
        behaviorId?: number | undefined;
        settings?: ({
            id?: number | undefined;
            name?: string | undefined;
            value?: number | undefined;
            defaultValue?: number | undefined;
            range?: {
                min?: number | undefined;
                max?: number | undefined;
                unit?: string | undefined;
            } | undefined;
            options?: {
                options?: string[] | undefined;
            } | undefined;
            toggle?: {} | undefined;
        }[] & ({
            id?: number | undefined;
            name?: string | undefined;
            value?: number | undefined;
            defaultValue?: number | undefined;
            range?: {
                min?: number | undefined;
                max?: number | undefined;
                unit?: string | undefined;
            } | undefined;
            options?: {
                options?: string[] | undefined;
            } | undefined;
            toggle?: {} | undefined;
        } & {
            id?: number | undefined;
            name?: string | undefined;
            value?: number | undefined;
            defaultValue?: number | undefined;
            range?: ({
                min?: number | undefined;
                max?: number | undefined;
                unit?: string | undefined;
            } & {
                min?: number | undefined;
                max?: number | undefined;
                unit?: string | undefined;
            } & { [K in Exclude<keyof I["settings"][number]["range"], keyof BehaviorSettingRange>]: never; }) | undefined;
            options?: ({
                options?: string[] | undefined;
            } & {
                options?: (string[] & string[] & { [K_1 in Exclude<keyof I["settings"][number]["options"]["options"], keyof string[]>]: never; }) | undefined;
            } & { [K_2 in Exclude<keyof I["settings"][number]["options"], "options">]: never; }) | undefined;
            toggle?: ({} & {} & { [K_3 in Exclude<keyof I["settings"][number]["toggle"], never>]: never; }) | undefined;
        } & { [K_4 in Exclude<keyof I["settings"][number], keyof BehaviorSetting>]: never; })[] & { [K_5 in Exclude<keyof I["settings"], keyof {
            id?: number | undefined;
            name?: string | undefined;
            value?: number | undefined;
            defaultValue?: number | undefined;
            range?: {
                min?: number | undefined;
                max?: number | undefined;
                unit?: string | undefined;
            } | undefined;
            options?: {
                options?: string[] | undefined;
            } | undefined;
            toggle?: {} | undefined;
        }[]>]: never; }) | undefined;
    } & { [K_6 in Exclude<keyof I, keyof GetBehaviorSettingsResponse>]: never; }>(base?: I | undefined): GetBehaviorSettingsResponse;
    fromPartial<I_1 extends {
        behaviorId?: number | undefined;
        settings?: {
            id?: number | undefined;
            name?: string | undefined;
            value?: number | undefined;
            defaultValue?: number | undefined;
            range?: {
                min?: number | undefined;
                max?: number | undefined;
                unit?: string | undefined;
            } | undefined;
            options?: {
                options?: string[] | undefined;
            } | undefined;
            toggle?: {} | undefined;
        }[] | undefined;
    } & {
        behaviorId?: number | undefined;
        settings?: ({
            id?: number | undefined;
            name?: string | undefined;
            value?: number | undefined;
            defaultValue?: number | undefined;
            range?: {
                min?: number | undefined;
                max?: number | undefined;
                unit?: string | undefined;
            } | undefined;
            options?: {
                options?: string[] | undefined;
            } | undefined;
            toggle?: {} | undefined;
        }[] & ({
            id?: number | undefined;
            name?: string | undefined;
            value?: number | undefined;
            defaultValue?: number | undefined;
            range?: {
                min?: number | undefined;
                max?: number | undefined;
                unit?: string | undefined;
            } | undefined;
            options?: {
                options?: string[] | undefined;
            } | undefined;
            toggle?: {} | undefined;
        } & {
            id?: number | undefined;
            name?: string | undefined;
            value?: number | undefined;
            defaultValue?: number | undefined;
            range?: ({
                min?: number | undefined;
                max?: number | undefined;
                unit?: string | undefined;
            } & {
                min?: number | undefined;
                max?: number | undefined;
                unit?: string | undefined;
            } & { [K_7 in Exclude<keyof I_1["settings"][number]["range"], keyof BehaviorSettingRange>]: never; }) | undefined;
            options?: ({
                options?: string[] | undefined;
            } & {
                options?: (string[] & string[] & { [K_8 in Exclude<keyof I_1["settings"][number]["options"]["options"], keyof string[]>]: never; }) | undefined;
            } & { [K_9 in Exclude<keyof I_1["settings"][number]["options"], "options">]: never; }) | undefined;
            toggle?: ({} & {} & { [K_10 in Exclude<keyof I_1["settings"][number]["toggle"], never>]: never; }) | undefined;
        } & { [K_11 in Exclude<keyof I_1["settings"][number], keyof BehaviorSetting>]: never; })[] & { [K_12 in Exclude<keyof I_1["settings"], keyof {
            id?: number | undefined;
            name?: string | undefined;
            value?: number | undefined;
            defaultValue?: number | undefined;
            range?: {
                min?: number | undefined;
                max?: number | undefined;
                unit?: string | undefined;
            } | undefined;
            options?: {
                options?: string[] | undefined;
            } | undefined;
            toggle?: {} | undefined;
        }[]>]: never; }) | undefined;
    } & { [K_13 in Exclude<keyof I_1, keyof GetBehaviorSettingsResponse>]: never; }>(object: I_1): GetBehaviorSettingsResponse;
};
export declare const BehaviorSetting: {
    encode(message: BehaviorSetting, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): BehaviorSetting;
    fromJSON(object: any): BehaviorSetting;
    toJSON(message: BehaviorSetting): unknown;
    create<I extends {
        id?: number | undefined;
        name?: string | undefined;
        value?: number | undefined;
        defaultValue?: number | undefined;
        range?: {
            min?: number | undefined;
            max?: number | undefined;
            unit?: string | undefined;
        } | undefined;
        options?: {
            options?: string[] | undefined;
        } | undefined;
        toggle?: {} | undefined;
    } & {
        id?: number | undefined;
        name?: string | undefined;
        value?: number | undefined;
        defaultValue?: number | undefined;
        range?: ({
            min?: number | undefined;
            max?: number | undefined;
            unit?: string | undefined;
        } & {
            min?: number | undefined;
            max?: number | undefined;
            unit?: string | undefined;
        } & { [K in Exclude<keyof I["range"], keyof BehaviorSettingRange>]: never; }) | undefined;
        options?: ({
            options?: string[] | undefined;
        } & {
            options?: (string[] & string[] & { [K_1 in Exclude<keyof I["options"]["options"], keyof string[]>]: never; }) | undefined;
        } & { [K_2 in Exclude<keyof I["options"], "options">]: never; }) | undefined;
        toggle?: ({} & {} & { [K_3 in Exclude<keyof I["toggle"], never>]: never; }) | undefined;
    } & { [K_4 in Exclude<keyof I, keyof BehaviorSetting>]: never; }>(base?: I | undefined): BehaviorSetting;
    fromPartial<I_1 extends {
        id?: number | undefined;
        name?: string | undefined;
        value?: number | undefined;
        defaultValue?: number | undefined;
        range?: {
            min?: number | undefined;
            max?: number | undefined;
            unit?: string | undefined;
        } | undefined;
        options?: {
            options?: string[] | undefined;
        } | undefined;
        toggle?: {} | undefined;
    } & {
        id?: number | undefined;
        name?: string | undefined;
        value?: number | undefined;
        defaultValue?: number | undefined;
        range?: ({
            min?: number | undefined;
            max?: number | undefined;
            unit?: string | undefined;
        } & {
            min?: number | undefined;
            max?: number | undefined;
            unit?: string | undefined;
        } & { [K_5 in Exclude<keyof I_1["range"], keyof BehaviorSettingRange>]: never; }) | undefined;
        options?: ({
            options?: string[] | undefined;
        } & {
            options?: (string[] & string[] & { [K_6 in Exclude<keyof I_1["options"]["options"], keyof string[]>]: never; }) | undefined;
        } & { [K_7 in Exclude<keyof I_1["options"], "options">]: never; }) | undefined;
        toggle?: ({} & {} & { [K_8 in Exclude<keyof I_1["toggle"], never>]: never; }) | undefined;
    } & { [K_9 in Exclude<keyof I_1, keyof BehaviorSetting>]: never; }>(object: I_1): BehaviorSetting;
};
export declare const BehaviorSettingRange: {
    encode(message: BehaviorSettingRange, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): BehaviorSettingRange;
    fromJSON(object: any): BehaviorSettingRange;
    toJSON(message: BehaviorSettingRange): unknown;
    create<I extends {
        min?: number | undefined;
        max?: number | undefined;
        unit?: string | undefined;
    } & {
        min?: number | undefined;
        max?: number | undefined;
        unit?: string | undefined;
    } & { [K in Exclude<keyof I, keyof BehaviorSettingRange>]: never; }>(base?: I | undefined): BehaviorSettingRange;
    fromPartial<I_1 extends {
        min?: number | undefined;
        max?: number | undefined;
        unit?: string | undefined;
    } & {
        min?: number | undefined;
        max?: number | undefined;
        unit?: string | undefined;
    } & { [K_1 in Exclude<keyof I_1, keyof BehaviorSettingRange>]: never; }>(object: I_1): BehaviorSettingRange;
};
export declare const BehaviorSettingOptions: {
    encode(message: BehaviorSettingOptions, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): BehaviorSettingOptions;
    fromJSON(object: any): BehaviorSettingOptions;
    toJSON(message: BehaviorSettingOptions): unknown;
    create<I extends {
        options?: string[] | undefined;
    } & {
        options?: (string[] & string[] & { [K in Exclude<keyof I["options"], keyof string[]>]: never; }) | undefined;
    } & { [K_1 in Exclude<keyof I, "options">]: never; }>(base?: I | undefined): BehaviorSettingOptions;
    fromPartial<I_1 extends {
        options?: string[] | undefined;
    } & {
        options?: (string[] & string[] & { [K_2 in Exclude<keyof I_1["options"], keyof string[]>]: never; }) | undefined;
    } & { [K_3 in Exclude<keyof I_1, "options">]: never; }>(object: I_1): BehaviorSettingOptions;
};
export declare const BehaviorSettingToggle: {
    encode(_: BehaviorSettingToggle, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): BehaviorSettingToggle;
    fromJSON(_: any): BehaviorSettingToggle;
    toJSON(_: BehaviorSettingToggle): unknown;
    create<I extends {} & {} & { [K in Exclude<keyof I, never>]: never; }>(base?: I | undefined): BehaviorSettingToggle;
    fromPartial<I_1 extends {} & {} & { [K_1 in Exclude<keyof I_1, never>]: never; }>(_: I_1): BehaviorSettingToggle;
};
export declare const SetBehaviorSettingRequest: {
    encode(message: SetBehaviorSettingRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): SetBehaviorSettingRequest;
    fromJSON(object: any): SetBehaviorSettingRequest;
    toJSON(message: SetBehaviorSettingRequest): unknown;
    create<I extends {
        behaviorId?: number | undefined;
        settingId?: number | undefined;
        value?: number | undefined;
    } & {
        behaviorId?: number | undefined;
        settingId?: number | undefined;
        value?: number | undefined;
    } & { [K in Exclude<keyof I, keyof SetBehaviorSettingRequest>]: never; }>(base?: I | undefined): SetBehaviorSettingRequest;
    fromPartial<I_1 extends {
        behaviorId?: number | undefined;
        settingId?: number | undefined;
        value?: number | undefined;
    } & {
        behaviorId?: number | undefined;
        settingId?: number | undefined;
        value?: number | undefined;
    } & { [K_1 in Exclude<keyof I_1, keyof SetBehaviorSettingRequest>]: never; }>(object: I_1): SetBehaviorSettingRequest;
};
declare type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends globalThis.Array<infer U> ? globalThis.Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
declare type KeysOfUnion<T> = T extends T ? keyof T : never;
export declare type Exact<P, I extends P> = P extends Builtin ? P : P & {
    [K in keyof P]: Exact<P[K], I[K]>;
} & {
    [K in Exclude<keyof I, KeysOfUnion<P>>]: never;
};
export {};
