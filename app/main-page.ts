export function onTap(args) {
    var button = args.object;
    button.text = "I was tapped";
    console.log('button was tapped');
}