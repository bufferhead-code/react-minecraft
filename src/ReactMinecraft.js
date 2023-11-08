import { Vec3 } from "vec3";
import { DefaultEventPriority, } from 'react-reconciler/constants.js';

import Reconciler from 'react-reconciler';

// Documentation: https://github.com/facebook/react/tree/main/packages/react-reconciler#shouldsettextcontenttype-props
const HostConfig = {
    supportsMutation: true,
    createInstance(type, props, rootContainer, hostContext, internalHandle) {
        if (type === 'nativeminecraftblock') {
            return {position: new Vec3(props.x, props.y, props.z), id: props.id};
        }
        else if(type === 'nativeminecraftcanvas') {
            // TODO: there is probably a better way to achieve this
            console.log('create canvas', props);
            rootContainer.canvas = props;
        }
    },
    createTextInstance(text, rootContainer, hostContext, internalHandle) {
        throw new Error('Text is not supported');
    },
    // appendInitialChild(parentInstance, child) -> i think i dont need this ? appends child to parentInstance
    finalizeInitialChildren(instance, type, props, rootContainer, hostContext) {
        return false;
    },
    shouldSetTextContent(type, props) {
        return false;
    },
    getRootHostContext(rootContainer) {
        return null;
    },
    getChildHostContext(parentHostContext, type, rootContainer) {
        return parentHostContext;
    },
    getPublicInstance(instance) {
        return instance;
    },
    prepareForCommit(containerInfo) {
        return null;
    },
    resetAfterCommit(containerInfo) {

    },
    preparePortalMount(containerInfo) {

    },
    scheduleTimeout(fn, delay) {
        setTimeout(fn, delay);
    },
    cancelTimeout(id) {
        clearTimeout(id);
    },
    noTimeout: -1,
    supportsMicrotasks: true,
    scheduleMicrotask(fn) {
        queueMicrotask(fn);
    },
    isPrimaryRenderer: true,
    getCurrentEventPriority() {
        return DefaultEventPriority;
    },
    clearContainer(container) {
        console.log('clear container');
        if(container.hasOwnProperty('canvas') && container.canvas){
            for (let x = container.canvas.x; x < (container.canvas.x + container.canvas.xSpan); x++) {
                for (let y = container.canvas.y; y < (container.canvas.y + container.canvas.ySpan); y++) {
                    for (let z = container.canvas.z; z < (container.canvas.z + container.canvas.zSpan); z++) {
                        console.log('reset block', x, y, z, 'to air')
                        // Reset to Air Blocks
                        container.server.setBlock(container.world, new Vec3(x, y, z), 0);
                    }
                }
            }
        }
        else{
            console.log('did not find canvas, skip reset');
        }
    },
    appendChild(parentInstance, child) {
        console.log('append child');
        console.log(parentInstance, child);
    },
    appendChildToContainer(container, child) {
        // TODO: might want to skip blocks here that are outside of the canvas
        if(child && child.hasOwnProperty('position') && child.position){
            container.server.setBlock(container.world, child.position, child.id);
        }
        console.log('append child to container');
        console.log(child);
    },
    insertBefore(parentInstance, child, beforeChild) {
        console.log('insert before');
        console.log(parentInstance, child, beforeChild);
    },
    insertInContainerBefore(container, child, beforeChild) {
        console.log('insert in container before');
        console.log(container, child, beforeChild);
    },
    removeChild(parentInstance, child) {
        console.log('remove child');
        console.log(parentInstance, child);
    },
    removeChildFromContainer(container, child) {
        console.log('remove child from container');
        console.log(container, child);
    },
    resetTextContent(instance) {
    },
    commitTextUpdate(textInstance, oldText, newText) {
        console.log('commit text update');
        console.log(textInstance, oldText, newText);
    },
    commitMount(instance, type, newProps, internalInstanceHandle) {
    },
    commitUpdate(instance, updatePayload, type, oldProps, newProps, internalInstanceHandle) {
        console.log('commit update');
        console.log(instance, updatePayload, type, oldProps, newProps, internalInstanceHandle);
    },
    hideInstance(instance) {
    },
    hideTextInstance(textInstance) {
    },
    unhideInstance(instance, props) {
    },
    unhideTextInstance(textInstance, text) {
    },
}

const MyRenderer = Reconciler(HostConfig);

const RendererPublicAPI = {
    render(element, container, callback) {
        MyRenderer.updateContainer(element, MyRenderer.createContainer(container), null, callback);
    }
};

export default RendererPublicAPI;
