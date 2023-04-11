
var modifiedHeaders = $request.headers;
modifiedHeaders['reward_credits'] = '100000';

$done({path: modifiedPath, headers : modifiedHeaders});
// $done({path : modifiedPath});
// $done({}); // Not changed.
